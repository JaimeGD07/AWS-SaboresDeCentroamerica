-- ============================
-- PAISES
-- ============================
insert into paises (nombre, slug, bandera_emoji, descripcion) values
('El Salvador', 'el-salvador', '🇸🇻', 'Cuna de la pupusa, plato nacional hecho de masa de maíz rellena de queso, frijol o chicharrón.'),
('Guatemala', 'guatemala', '🇬🇹', 'Gastronomía marcada por raíces mayas, con guisos a base de recados y especias tostadas.'),
('Honduras', 'honduras', '🇭🇳', 'Cocina costera e interior, con fuerte presencia de mariscos, coco y plátano.'),
('Nicaragua', 'nicaragua', '🇳🇮', 'Comida sencilla y abundante centrada en el maíz, frijoles y carnes a la parrilla.'),
('Costa Rica', 'costa-rica', '🇨🇷', 'Cocina casera basada en el clásico "casado", combinando arroz, frijoles y proteína.'),
('Panamá', 'panama', '🇵🇦', 'Fusión de influencias caribeñas, afroantillanas e indígenas en platos de mariscos y guisos.'),
('Belice', 'belice', '🇧🇿', 'Mezcla única centroamericana y caribeña, con fuerte influencia garífuna y creole.');

-- ============================
-- PLATILLOS
-- ============================

-- El Salvador
insert into platillos (nombre, slug, pais_id, descripcion, ingredientes, tipo, imagen_url)
select 'Pupusas', 'pupusas', id, 'Tortillas gruesas de maíz rellenas de queso, frijoles refritos o chicharrón, servidas con curtido y salsa de tomate.', 'Masa de maíz, queso, frijol refrito, chicharrón, curtido', 'plato fuerte', ''
from paises where slug = 'el-salvador';

insert into platillos (nombre, slug, pais_id, descripcion, ingredientes, tipo, imagen_url)
select 'Yuca frita', 'yuca-frita', id, 'Yuca cocida y luego frita hasta dorar, acompañada de curtido y chicharrón.', 'Yuca, chicharrón, curtido', 'botana', ''
from paises where slug = 'el-salvador';

-- Guatemala
insert into platillos (nombre, slug, pais_id, descripcion, ingredientes, tipo, imagen_url)
select 'Pepián', 'pepian', id, 'Guiso espeso de carne con salsa de semillas y chiles tostados, considerado patrimonio cultural de Guatemala.', 'Pollo o res, ajonjolí, pepitoria, tomate, chiles, especias', 'plato fuerte', ''
from paises where slug = 'guatemala';

insert into platillos (nombre, slug, pais_id, descripcion, ingredientes, tipo, imagen_url)
select 'Chiles rellenos', 'chiles-rellenos', id, 'Chiles pimientos rellenos de carne molida y verduras, capeados y fritos.', 'Chile pimiento, carne molida, huevo, verduras', 'plato fuerte', ''
from paises where slug = 'guatemala';

-- Honduras
insert into platillos (nombre, slug, pais_id, descripcion, ingredientes, tipo, imagen_url)
select 'Baleadas', 'baleadas', id, 'Tortilla de harina doblada rellena de frijoles refritos, queso y crema.', 'Tortilla de harina, frijol refrito, queso, crema', 'plato fuerte', ''
from paises where slug = 'honduras';

insert into platillos (nombre, slug, pais_id, descripcion, ingredientes, tipo, imagen_url)
select 'Sopa de caracol', 'sopa-de-caracol', id, 'Sopa cremosa a base de caracol de mar, leche de coco y plátano.', 'Caracol, leche de coco, plátano, yuca, especias', 'plato fuerte', ''
from paises where slug = 'honduras';

-- Nicaragua
insert into platillos (nombre, slug, pais_id, descripcion, ingredientes, tipo, imagen_url)
select 'Gallo pinto', 'gallo-pinto', id, 'Arroz y frijoles rojos salteados juntos, plato base del desayuno nicaragüense.', 'Arroz, frijol rojo, cebolla, chiltoma', 'plato fuerte', ''
from paises where slug = 'nicaragua';

insert into platillos (nombre, slug, pais_id, descripcion, ingredientes, tipo, imagen_url)
select 'Vigorón', 'vigoron', id, 'Yuca cocida con chicharrón y ensalada de repollo encurtido.', 'Yuca, chicharrón, repollo, tomate', 'plato fuerte', ''
from paises where slug = 'nicaragua';

-- Costa Rica
insert into platillos (nombre, slug, pais_id, descripcion, ingredientes, tipo, imagen_url)
select 'Casado', 'casado', id, 'Plato combinado con arroz, frijoles, ensalada, plátano maduro y proteína a elección.', 'Arroz, frijol, plátano maduro, ensalada, carne o pollo', 'plato fuerte', ''
from paises where slug = 'costa-rica';

insert into platillos (nombre, slug, pais_id, descripcion, ingredientes, tipo, imagen_url)
select 'Olla de carne', 'olla-de-carne', id, 'Sopa contundente con res y variedad de vegetales de raíz.', 'Res, yuca, papa, elote, ayote, plátano', 'plato fuerte', ''
from paises where slug = 'costa-rica';

-- Panamá
insert into platillos (nombre, slug, pais_id, descripcion, ingredientes, tipo, imagen_url)
select 'Sancocho', 'sancocho', id, 'Sopa tradicional a base de gallina de campo, ñame y culantro.', 'Gallina, ñame, culantro, mazorca', 'plato fuerte', ''
from paises where slug = 'panama';

insert into platillos (nombre, slug, pais_id, descripcion, ingredientes, tipo, imagen_url)
select 'Ropa vieja', 'ropa-vieja', id, 'Carne de res desmechada guisada en salsa de tomate con especias.', 'Res, tomate, pimiento, cebolla, especias', 'plato fuerte', ''
from paises where slug = 'panama';

-- Belice
insert into platillos (nombre, slug, pais_id, descripcion, ingredientes, tipo, imagen_url)
select 'Rice and beans', 'rice-and-beans', id, 'Arroz cocido con frijoles y leche de coco, acompañante base de la cocina beliceña.', 'Arroz, frijol rojo, leche de coco', 'plato fuerte', ''
from paises where slug = 'belice';

insert into platillos (nombre, slug, pais_id, descripcion, ingredientes, tipo, imagen_url)
select 'Conch fritters', 'conch-fritters', id, 'Buñuelos fritos de caracol marino, especialidad costera garífuna.', 'Caracol marino, harina, especias, cebolla', 'botana', ''
from paises where slug = 'belice';
