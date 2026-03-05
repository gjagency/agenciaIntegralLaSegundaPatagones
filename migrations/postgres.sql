create table quotations (
  id         uuid        primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  service    text,
  name       text,
  phone      text,
  email      text,
  location   text,
  data       jsonb
);

alter table quotations enable row level security;

create policy "service role full access"
on quotations
for all
using (true)
with check (true);