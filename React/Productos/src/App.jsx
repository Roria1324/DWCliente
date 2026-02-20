import "./App.css";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Route from "./rutas/Router.jsx";

function App() {
  return (
    <>
      <Header />
      <Route />
      <Footer />
    </>
  );
}

export default App;

/*

Sentencias SQL.

-- Tablas creadas para hacer la base de datos.
create table public.roles (
  id uuid not null,
  rol text not null default 'usuario'::text,
  created_at timestamp with time zone null default now(),
  constraint roles_pkey primary key (id),
  constraint roles_id_fkey foreign KEY (id) references auth.users (id) on delete CASCADE,
  constraint roles_id_perfiles_fkey foreign KEY (id) references perfiles (id) on delete CASCADE,
  constraint roles_rol_check check (
    (
      rol = any (array['usuario'::text, 'administrador'::text])
    )
  )
) TABLESPACE pg_default;

create table public.productos (
  id uuid not null default gen_random_uuid (),
  name text not null,
  description text null,
  weight numeric(10, 2) null,
  price numeric(10, 2) not null,
  image_url text null,
  created_at timestamp with time zone null default now(),
  constraint productos_pkey primary key (id),
  constraint productos_precio_check check ((price >= (0)::numeric))
) TABLESPACE pg_default;

create table public.perfiles (
  id uuid not null,
  full_name text null,
  avatar_url text null,
  description text null,
  updated_at timestamp with time zone null default now(),
  email text null,
  constraint perfiles_pkey primary key (id),
  constraint perfiles_id_fkey foreign KEY (id) references auth.users (id) on delete CASCADE
) TABLESPACE pg_default;

create table public.listas_productos (
  id uuid not null default gen_random_uuid (),
  lista_id uuid not null,
  producto_id uuid not null,
  cantidad integer not null default 1,
  constraint listas_productos_pkey primary key (id),
  constraint unique_lista_producto unique (lista_id, producto_id),
  constraint listas_productos_lista_id_fkey foreign KEY (lista_id) references listas_compra (id) on delete CASCADE,
  constraint listas_productos_producto_id_fkey foreign KEY (producto_id) references productos (id) on delete CASCADE,
  constraint listas_productos_cantidad_check check ((cantidad > 0))
) TABLESPACE pg_default;

create table public.listas_compra (
  id uuid not null default gen_random_uuid (),
  nombre text not null,
  propietario_id uuid not null,
  created_at timestamp with time zone null default now(),
  constraint listas_compra_pkey primary key (id),
  constraint listas_compra_propietario_id_fkey foreign KEY (propietario_id) references auth.users (id) on delete CASCADE
) TABLESPACE pg_default;

-- Función: crea automáticamente un registro en roles y perfiles usando el id y email del nuevo usuario.

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.roles (id)
  VALUES (NEW.id);

  INSERT INTO public.perfiles (id, email)
  VALUES (NEW.id, NEW.email);

  RETURN NEW;
END;
$$;

-- Trigger: ejecuta la función handle_new_user después de insertar un usuario en auth.users.
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE PROCEDURE public.handle_new_user();


-- Función is_admin devuelve true o false si el usuario es administrador para poder realizar X acciones.

DROP FUNCTION IF EXISTS public.is_admin();

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.roles
    WHERE id = auth.uid()
      AND rol = 'administrador'
  );
$$;
*/
