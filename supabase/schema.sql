-- Tabla: paises
create table paises (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  slug text not null unique,
  bandera_emoji text,
  descripcion text,
  created_at timestamptz default now()
);

-- Tabla: platillos
create table platillos (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  slug text not null unique,
  pais_id uuid not null references paises(id) on delete cascade,
  descripcion text,
  ingredientes text,
  imagen_url text,
  tipo text,
  created_at timestamptz default now()
);

-- Habilitar RLS
alter table paises enable row level security;
alter table platillos enable row level security;

-- Policies de solo lectura publica
create policy "Enable read access for all users"
on paises for select
using (true);

create policy "Enable read access for all users"
on platillos for select
using (true);
