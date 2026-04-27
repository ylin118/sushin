/* ========================================
   SUSHIN BARCELONA — SCRIPTS (BILINGÜE ES/CA)
   ========================================
   Versión optimizada e integrada con i18n.js
   Utiliza los módulos I18n, MenuModule, FAQModule,
   ChatModule, AuthModule y utilidades compartidas.
   ======================================== */

// =============================================
// 1. CONFIGURACIÓN Y DATOS (BILINGÜE)
// =============================================

// --- Identificadores de restaurantes ---
const RESTO_IDS = {
    MATARO: 'mataro',
    VILADOMAT: 'viladomat',
    SANT_GERVASI: 'santgervasi',
    BALMES: 'balmes'
};
const ALL_RESTOS = Object.values(RESTO_IDS);

// --- Función auxiliar para obtener el idioma actual (usa I18n si está disponible) ---
function getCurrentLang() {
    if (window.I18n && typeof window.I18n.getLang === 'function') {
        return window.I18n.getLang();
    }
    return localStorage.getItem('site-lang') || 'es';
}

// --- Datos del Menú (bilingüe) ---
const MENU_DATA = {
    es: {
        'top-rolls': [
            { name: 'Tokyo Roll', desc: 'Salmón, aguacate, queso crema, crispy, salsa spicy', price: '16.90', tag: '🔥 Bestseller', available: ALL_RESTOS },
            { name: 'Barcelona Roll', desc: 'Atún rojo, foie, trufa, cebollino', price: '18.50', tag: '⭐ Chef', available: ALL_RESTOS },
            { name: 'Mataró Roll', desc: 'Gamba, mango, jalapeño, salsa ponzu', price: '15.90', tag: '🏠 Local', available: ALL_RESTOS },
            { name: 'Volcán Roll', desc: 'Salmón flambeado, queso, cebolla crispy', price: '14.90', tag: '🌋 Hot', available: ALL_RESTOS },
            { name: 'Dragon Roll', desc: 'Anguila, aguacate, sésamo negro, unagi sauce', price: '17.50', available: ALL_RESTOS },
            { name: 'Rainbow Roll', desc: 'California cubierto de sashimi variado', price: '16.90', tag: '🌈 Color', available: ALL_RESTOS }
        ],
        'rolls': [
            { name: 'California Clásico', desc: 'Cangrejo, aguacate, pepino', price: '10.90', available: ALL_RESTOS },
            { name: 'Salmón Phila', desc: 'Salmón, queso crema, pepino', price: '12.50', available: ALL_RESTOS },
            { name: 'Ebi Tempura', desc: 'Gamba tempura, aguacate, spicy mayo', price: '13.90', available: ALL_RESTOS },
            { name: 'Atún Picante', desc: 'Atún, spicy mayo, cebollino', price: '13.50', available: ALL_RESTOS },
            { name: 'Vegetal Roll', desc: 'Aguacate, zanahoria, pepino, sésamo', price: '9.90', available: ALL_RESTOS },
            { name: 'Crispy Chicken', desc: 'Pollo crispy, lechuga, salsa dulce', price: '11.90', available: ALL_RESTOS },
            { name: 'Mango Tango', desc: 'Salmón, mango, aguacate, lima', price: '14.50', available: ALL_RESTOS },
            { name: 'Krab Spicy', desc: 'Surimi spicy, aguacate, masago', price: '10.50', available: ALL_RESTOS }
        ],
        'tempura-rolls': [
            { name: 'Tempura Salmón', desc: 'Salmón, queso, aguacate — tempurizado', price: '14.90', available: ALL_RESTOS },
            { name: 'Tempura Ebi', desc: 'Gamba, queso crema, lechuga — tempurizado', price: '14.50', available: ALL_RESTOS },
            { name: 'Tempura Atún', desc: 'Atún, spicy mayo, cebollino — tempurizado', price: '15.90', available: ALL_RESTOS },
            { name: 'Tempura Banana', desc: 'Banana, Nutella, coco — tempurizado', price: '11.90', tag: '🍓 Sweet', available: ALL_RESTOS },
            { name: 'Volcán Tempura', desc: 'Salmón, queso, spicy — tempurizado con salsa flameada', price: '16.50', available: ALL_RESTOS }
        ],
        'combinados': [
            { name: 'Combinado Sushin', desc: '8 nigiris + 8 makis + 4 sashimis', price: '24.90', tag: '🏠 Signature', available: ALL_RESTOS },
            { name: 'Combinado Clásico', desc: '6 nigiris + 8 makis', price: '19.90', available: ALL_RESTOS },
            { name: 'Combinado Sashimi', desc: '16 piezas de sashimi variado', price: '26.90', available: ALL_RESTOS },
            { name: 'Combinado Vegetariano', desc: '10 makis vegetales + edamame', price: '16.90', available: ALL_RESTOS },
            { name: 'Combinado Deluxe', desc: '6 nigiris premium + 4 sashimis + 1 roll especial', price: '34.90', tag: '⭐ Premium', available: ALL_RESTOS }
        ],
        'nigiris': [
            { name: 'Nigiri Salmón', desc: 'Salmón fresco sobre arroz', price: '3.50', available: ALL_RESTOS },
            { name: 'Nigiri Atún', desc: 'Atún rojo sobre arroz', price: '4.20', available: ALL_RESTOS },
            { name: 'Nigiri Anguila', desc: 'Unagi sobre arroz con salsa unagi', price: '4.90', available: ALL_RESTOS },
            { name: 'Nigiri Gamba', desc: 'Gamba dulce sobre arroz', price: '3.80', available: ALL_RESTOS },
            { name: 'Nigiri Pulpo', desc: 'Pulpo sobre arroz', price: '3.50', available: ALL_RESTOS },
            { name: 'Nigiri Ikura', desc: 'Huevas de salmón sobre arroz', price: '4.50', available: ALL_RESTOS },
            { name: 'Nigiri Toro', desc: 'Ventresca de atún sobre arroz', price: '5.90', tag: '⭐ Premium', available: ALL_RESTOS },
            { name: 'Nigiri Salmón Flambeado', desc: 'Salmón flambeado con soplete', price: '4.20', available: ALL_RESTOS },
            { name: 'Nigiri Trufa', desc: 'Salmón, trufa, queso crema', price: '5.50', available: ALL_RESTOS },
            { name: 'Nigiri Foie', desc: 'Foie micuit con reducción', price: '6.50', tag: '⭐ Premium', available: ALL_RESTOS },
            { name: 'Nigiri Vegano', desc: 'Tofu marinado sobre arroz', price: '3.20', available: ALL_RESTOS },
            { name: 'Nigiri Ceviche', desc: 'Pesce del día marinado al limón', price: '4.50', available: ALL_RESTOS }
        ],
        'sashimi': [
            { name: 'Sashimi Salmón (8 pcs)', desc: '8 cortes de salmón fresco', price: '14.90', available: ALL_RESTOS },
            { name: 'Sashimi Atún (8 pcs)', desc: '8 cortes de atún rojo', price: '17.90', available: ALL_RESTOS },
            { name: 'Sashimi Variado (16 pcs)', desc: 'Salmón, atún, gamba, pulpo', price: '24.90', available: ALL_RESTOS },
            { name: 'Sashimi Toro (6 pcs)', desc: 'Ventresca de atún premium', price: '22.50', tag: '⭐ Premium', available: ALL_RESTOS }
        ],
        'maki': [
            { name: 'Maki Salmón (8 pcs)', desc: 'Salmón fresco enrollado en alga', price: '8.90', available: ALL_RESTOS },
            { name: 'Maki Atún (8 pcs)', desc: 'Atún rojo enrollado en alga', price: '9.90', available: ALL_RESTOS },
            { name: 'Maki Pepino (8 pcs)', desc: 'Pepino fresco enrollado', price: '6.90', available: ALL_RESTOS },
            { name: 'Maki Aguacate (8 pcs)', desc: 'Aguacate cremoso enrollado', price: '7.90', available: ALL_RESTOS },
            { name: 'Maki Mixto (8 pcs)', desc: 'Salmón y aguacate', price: '9.50', available: ALL_RESTOS }
        ],
        'snacks': [
            { name: 'Edamame', desc: 'Habas de soja al vapor con sal marina', price: '5.50', available: ALL_RESTOS },
            { name: 'Gyozas Cerdo (6 uds)', desc: 'Empanadillas japonesas al vapor', price: '8.90', available: ALL_RESTOS },
            { name: 'Gyozas Vegana (6 uds)', desc: 'Empanadillas de verduras', price: '8.50', available: ALL_RESTOS },
            { name: 'Takoyaki (8 uds)', desc: 'Bolitas de pulpo con salsa takoyaki', price: '9.90', available: ALL_RESTOS },
            { name: 'Karaage', desc: 'Pollo frito japonés con limón', price: '9.50', available: ALL_RESTOS },
            { name: 'Wakame Salad', desc: 'Algas marinadas con sésamo', price: '6.90', available: ALL_RESTOS }
        ],
        'ensaladas': [
            { name: 'Ensalada Miso', desc: 'Mixta, mango, edamame, vinagreta de miso', price: '9.90', available: ALL_RESTOS },
            { name: 'Ensalada Salmón', desc: 'Salmón marinado, aguacate, rúcula, ponzu', price: '13.90', available: ALL_RESTOS },
            { name: 'Ensalada Atún', desc: 'Atún fresco, wakame, sésamo, soja', price: '14.90', available: ALL_RESTOS },
            { name: 'Sunomono', desc: 'Pepino, alga wakame, vinagre de arroz', price: '7.90', available: ALL_RESTOS }
        ],
        'principales': [
            { name: 'Ramen Salmón Miso', desc: 'Fideos, salmón, huevo, cebollino, miso', price: '14.90', available: ALL_RESTOS },
            { name: 'Udon Tempura', desc: 'Fideos udon con tempura de gamba', price: '13.90', available: ALL_RESTOS },
            { name: 'Arroz Chahan', desc: 'Arroz frito japonés con verduras y huevo', price: '11.90', available: ALL_RESTOS },
            { name: 'Yakisoba', desc: 'Fideos salteados con verduras y cerdo', price: '12.90', available: ALL_RESTOS },
            { name: 'Teriyaki de Pollo', desc: 'Pollo glaseado con salsa teriyaki', price: '13.50', available: ALL_RESTOS }
        ],
        'tops': [
            { name: 'Tataki de Atún', desc: 'Atún sellado con vinagreta de jengibre', price: '16.90', tag: '⭐ Top', available: ALL_RESTOS },
            { name: 'Ceviche Japonés', desc: 'Pesce del día, lima, ají, cebollino', price: '14.90', available: ALL_RESTOS },
            { name: 'Tiradito Salmón', desc: 'Salmón en láminas con salsa ají limón', price: '13.90', available: ALL_RESTOS },
            { name: 'Oysters al Ponzu', desc: '6 ostras con ponzu y wasabi', price: '18.90', tag: '⭐ Premium', available: ALL_RESTOS }
        ],
        'postres': [
            { name: 'Mochi Ice Cream (2 uds)', desc: 'Helado de té verde y mango en mochi', price: '6.90', available: ALL_RESTOS },
            { name: 'Cheesecake Japonés', desc: 'Bizcocho ligero japonés', price: '7.50', available: ALL_RESTOS },
            { name: 'Dorayaki', desc: 'Panqueque relleno de pasta de judías', price: '5.90', available: ALL_RESTOS },
            { name: 'Matcha Tiramisú', desc: 'Tiramisú de té matcha', price: '8.50', available: ALL_RESTOS },
            { name: 'Temaki Banana', desc: 'Helado de banana, Nutella, coco', price: '7.90', available: ALL_RESTOS }
        ]
    },
    ca: {
        'top-rolls': [
            { name: 'Tokyo Roll', desc: 'Salmó, alvocat, formatge crema, crispy, salsa spicy', price: '16.90', tag: '🔥 Bestseller', available: ALL_RESTOS },
            { name: 'Barcelona Roll', desc: 'Tonyina vermella, foie, tòfona, cebollí', price: '18.50', tag: '⭐ Xef', available: ALL_RESTOS },
            { name: 'Mataró Roll', desc: 'Gamba, mango, jalapeño, salsa ponzu', price: '15.90', tag: '🏠 Local', available: ALL_RESTOS },
            { name: 'Volcán Roll', desc: 'Salmó flamejat, formatge, ceba crispy', price: '14.90', tag: '🌋 Hot', available: ALL_RESTOS },
            { name: 'Dragon Roll', desc: 'Anguila, alvocat, sèsam negre, salsa unagi', price: '17.50', available: ALL_RESTOS },
            { name: 'Rainbow Roll', desc: 'California cobert de sashimi variat', price: '16.90', tag: '🌈 Color', available: ALL_RESTOS }
        ],
        'rolls': [
            { name: 'California Clàssic', desc: 'Cranc, alvocat, cogombre', price: '10.90', available: ALL_RESTOS },
            { name: 'Salmó Phila', desc: 'Salmó, formatge crema, cogombre', price: '12.50', available: ALL_RESTOS },
            { name: 'Ebi Tempura', desc: 'Gamba tempura, alvocat, spicy mayo', price: '13.90', available: ALL_RESTOS },
            { name: 'Tonyina Picant', desc: 'Tonyina, spicy mayo, cebollí', price: '13.50', available: ALL_RESTOS },
            { name: 'Vegetal Roll', desc: 'Alvocat, pastanaga, cogombre, sèsam', price: '9.90', available: ALL_RESTOS },
            { name: 'Crispy Chicken', desc: 'Pollastre crispy, enciam, salsa dolça', price: '11.90', available: ALL_RESTOS },
            { name: 'Mango Tango', desc: 'Salmó, mango, alvocat, llima', price: '14.50', available: ALL_RESTOS },
            { name: 'Krab Spicy', desc: 'Surimi spicy, alvocat, masago', price: '10.50', available: ALL_RESTOS }
        ],
        'tempura-rolls': [
            { name: 'Tempura Salmó', desc: 'Salmó, formatge, alvocat — tempuritzat', price: '14.90', available: ALL_RESTOS },
            { name: 'Tempura Ebi', desc: 'Gamba, formatge crema, enciam — tempuritzat', price: '14.50', available: ALL_RESTOS },
            { name: 'Tempura Tonyina', desc: 'Tonyina, spicy mayo, cebollí — tempuritzat', price: '15.90', available: ALL_RESTOS },
            { name: 'Tempura Banana', desc: 'Plàtan, Nutella, coco — tempuritzat', price: '11.90', tag: '🍓 Dolç', available: ALL_RESTOS },
            { name: 'Volcán Tempura', desc: 'Salmó, formatge, spicy — tempuritzat amb salsa flamejada', price: '16.50', available: ALL_RESTOS }
        ],
        'combinados': [
            { name: 'Combinat Sushin', desc: '8 nigiris + 8 makis + 4 sashimis', price: '24.90', tag: '🏠 Signature', available: ALL_RESTOS },
            { name: 'Combinat Clàssic', desc: '6 nigiris + 8 makis', price: '19.90', available: ALL_RESTOS },
            { name: 'Combinat Sashimi', desc: '16 peces de sashimi variat', price: '26.90', available: ALL_RESTOS },
            { name: 'Combinat Vegetarià', desc: '10 makis vegetals + edamame', price: '16.90', available: ALL_RESTOS },
            { name: 'Combinat Deluxe', desc: '6 nigiris premium + 4 sashimis + 1 roll especial', price: '34.90', tag: '⭐ Premium', available: ALL_RESTOS }
        ],
        'nigiris': [
            { name: 'Nigiri Salmó', desc: 'Salmó fresc sobre arròs', price: '3.50', available: ALL_RESTOS },
            { name: 'Nigiri Tonyina', desc: 'Tonyina vermella sobre arròs', price: '4.20', available: ALL_RESTOS },
            { name: 'Nigiri Anguila', desc: 'Unagi sobre arròs amb salsa unagi', price: '4.90', available: ALL_RESTOS },
            { name: 'Nigiri Gamba', desc: 'Gamba dolça sobre arròs', price: '3.80', available: ALL_RESTOS },
            { name: 'Nigiri Pop', desc: 'Pop sobre arròs', price: '3.50', available: ALL_RESTOS },
            { name: 'Nigiri Ikura', desc: 'Ous de salmó sobre arròs', price: '4.50', available: ALL_RESTOS },
            { name: 'Nigiri Toro', desc: 'Ventresca de tonyina sobre arròs', price: '5.90', tag: '⭐ Premium', available: ALL_RESTOS },
            { name: 'Nigiri Salmó Flamejat', desc: 'Salmó flamejat amb bufador', price: '4.20', available: ALL_RESTOS },
            { name: 'Nigiri Tòfona', desc: 'Salmó, tòfona, formatge crema', price: '5.50', available: ALL_RESTOS },
            { name: 'Nigiri Foie', desc: 'Foie micuit amb reducció', price: '6.50', tag: '⭐ Premium', available: ALL_RESTOS },
            { name: 'Nigiri Vegà', desc: 'Tofu marinat sobre arròs', price: '3.20', available: ALL_RESTOS },
            { name: 'Nigiri Ceviche', desc: 'Peix del dia marinat amb llimona', price: '4.50', available: ALL_RESTOS }
        ],
        'sashimi': [
            { name: 'Sashimi Salmó (8 pcs)', desc: '8 talls de salmó fresc', price: '14.90', available: ALL_RESTOS },
            { name: 'Sashimi Tonyina (8 pcs)', desc: '8 talls de tonyina vermella', price: '17.90', available: ALL_RESTOS },
            { name: 'Sashimi Variat (16 pcs)', desc: 'Salmó, tonyina, gamba, pop', price: '24.90', available: ALL_RESTOS },
            { name: 'Sashimi Toro (6 pcs)', desc: 'Ventresca de tonyina premium', price: '22.50', tag: '⭐ Premium', available: ALL_RESTOS }
        ],
        'maki': [
            { name: 'Maki Salmó (8 pcs)', desc: 'Salmó fresc enrotllat en alga', price: '8.90', available: ALL_RESTOS },
            { name: 'Maki Tonyina (8 pcs)', desc: 'Tonyina vermella enrotllada en alga', price: '9.90', available: ALL_RESTOS },
            { name: 'Maki Cogombre (8 pcs)', desc: 'Cogombre fresc enrotllat', price: '6.90', available: ALL_RESTOS },
            { name: 'Maki Alvocat (8 pcs)', desc: 'Alvocat cremós enrotllat', price: '7.90', available: ALL_RESTOS },
            { name: 'Maki Mixt (8 pcs)', desc: 'Salmó i alvocat', price: '9.50', available: ALL_RESTOS }
        ],
        'snacks': [
            { name: 'Edamame', desc: 'Faves de soja al vapor amb sal marina', price: '5.50', available: ALL_RESTOS },
            { name: 'Gyozes Porc (6 uds)', desc: 'Empanadilles japoneses al vapor', price: '8.90', available: ALL_RESTOS },
            { name: 'Gyozes Veganes (6 uds)', desc: 'Empanadilles de verdures', price: '8.50', available: ALL_RESTOS },
            { name: 'Takoyaki (8 uds)', desc: 'Boletes de pop amb salsa takoyaki', price: '9.90', available: ALL_RESTOS },
            { name: 'Karaage', desc: 'Pollastre fregit japonès amb llimona', price: '9.50', available: ALL_RESTOS },
            { name: 'Amanida Wakame', desc: 'Algues marinades amb sèsam', price: '6.90', available: ALL_RESTOS }
        ],
        'ensaladas': [
            { name: 'Amanida Miso', desc: 'Mixta, mango, edamame, vinagreta de miso', price: '9.90', available: ALL_RESTOS },
            { name: 'Amanida Salmó', desc: 'Salmó marinat, alvocat, ruca, ponzu', price: '13.90', available: ALL_RESTOS },
            { name: 'Amanida Tonyina', desc: 'Tonyina fresca, wakame, sèsam, soja', price: '14.90', available: ALL_RESTOS },
            { name: 'Sunomono', desc: 'Cogombre, alga wakame, vinagre d\'arròs', price: '7.90', available: ALL_RESTOS }
        ],
        'principales': [
            { name: 'Ramen Salmó Miso', desc: 'Fideus, salmó, ou, cebollí, miso', price: '14.90', available: ALL_RESTOS },
            { name: 'Udon Tempura', desc: 'Fideus udon amb tempura de gamba', price: '13.90', available: ALL_RESTOS },
            { name: 'Arròs Chahan', desc: 'Arròs fregit japonès amb verdures i ou', price: '11.90', available: ALL_RESTOS },
            { name: 'Yakisoba', desc: 'Fideus saltats amb verdures i porc', price: '12.90', available: ALL_RESTOS },
            { name: 'Teriyaki de Pollastre', desc: 'Pollastre glacejat amb salsa teriyaki', price: '13.50', available: ALL_RESTOS }
        ],
        'tops': [
            { name: 'Tataki de Tonyina', desc: 'Tonyina segellada amb vinagreta de gingebre', price: '16.90', tag: '⭐ Top', available: ALL_RESTOS },
            { name: 'Ceviche Japonès', desc: 'Peix del dia, llima, bitxo, cebollí', price: '14.90', available: ALL_RESTOS },
            { name: 'Tiradito Salmó', desc: 'Salmó en làmines amb salsa bitxo llima', price: '13.90', available: ALL_RESTOS },
            { name: 'Ostres al Ponzu', desc: '6 ostres amb ponzu i wasabi', price: '18.90', tag: '⭐ Premium', available: ALL_RESTOS }
        ],
        'postres': [
            { name: 'Mochi Ice Cream (2 uds)', desc: 'Gelat de te verd i mango en mochi', price: '6.90', available: ALL_RESTOS },
            { name: 'Cheesecake Japonès', desc: 'Pa de pessic lleuger japonès', price: '7.50', available: ALL_RESTOS },
            { name: 'Dorayaki', desc: 'Pancake farcit de pasta de mongetes', price: '5.90', available: ALL_RESTOS },
            { name: 'Matcha Tiramisú', desc: 'Tiramisú de te matcha', price: '8.50', available: ALL_RESTOS },
            { name: 'Temaki Plàtan', desc: 'Gelat de plàtan, Nutella, coco', price: '7.90', available: ALL_RESTOS }
        ]
    }
};

// --- Datos de Preguntas Frecuentes (FAQ) bilingüe ---
const FAQ_DATA = {
    es: [
        { q: '📍 ¿Dónde están ubicados los restaurantes?', a: 'Tenemos cuatro ubicaciones en Barcelona:<br>- Sushin Mataró: Carrer de Barcelona, 23, Mataró<br>- Sushin Viladomat: Carrer de Viladomat, 42, Barcelona<br>- Sushin Sant Gervasi: Carrer de Sant Gervasi, 15, Barcelona<br>- Sushin Balmes: Carrer de Balmes, 301, Barcelona.<br>Todos están bien comunicados y cerca de transporte público.' },
        { q: '📅 ¿Cómo puedo hacer una reserva?', a: 'Puedes reservar de varias formas:<br>• En nuestra web, a través del formulario de reservas.<br>• Por teléfono: +34 900 123 456 (horario de restaurante).<br>• Por WhatsApp: +34 637 123 456.<br>• Directamente en el local.<br>Recomendamos reservar con antelación, especialmente los fines de semana. Las reservas se mantienen 15 minutos después de la hora acordada.' },
        { q: '🛵 ¿Ofrecen servicio de delivery?', a: 'Sí, hacemos delivery en zonas cercanas a cada restaurante. El tiempo medio de entrega es de 35-45 minutos. El pedido mínimo es de 15€. Puedes hacer tu pedido a través de nuestra web o llamando al restaurante. También ofrecemos takeaway (recogida en local).' },
        { q: '🌱 ¿Tienen opciones vegetarianas/veganas?', a: 'Por supuesto. Contamos con una amplia variedad de platos vegetarianos y veganos:<br>• Rolls vegetarianos: Vegetal Roll (9.90€), Maki Pepino, Maki Aguacate.<br>• Nigiri Vegano (3.20€).<br>• Ensalada Miso (9.90€) sin pescado.<br>• Gyozas vegetales (8.50€).<br>• También podemos adaptar otros platos bajo petición. Pregunta a nuestro personal.' },
        { q: '🎁 ¿Puedo usar la Gift Card en cualquier restaurante?', a: 'Sí, las Gift Cards son válidas en los cuatro restaurantes del grupo (Sushin Mataró, Viladomat, Sant Gervasi y Balmes). Tienen una validez de 12 meses desde la fecha de compra. Puedes adquirirlas en formato digital (25€, 50€, 100€) y enviarlas por email.' },
        { q: '👥 ¿Hacen menús para grupos o eventos privados?', a: 'Sí, ofrecemos menús especiales para grupos de 8 a 30 personas desde 35€/persona. Incluye:<br>• Menú degustación personalizado.<br>• Zona privada disponible en todos los locales.<br>• Opciones de bebida y postre incluidas.<br>• Posibilidad de adaptar a alergias o preferencias.<br>Contáctanos para solicitar un presupuesto sin compromiso.' },
        { q: '⚠️ ¿Tienen información de alérgenos?', a: 'Sí, disponemos de información detallada de alérgenos para todos los platos. Manipulamos crustáceos, pescado, gluten, lactosa, frutos secos, sésamo, soja y otros alérgenos. Si tienes alguna alergia o intolerancia, indícalo al personal al hacer el pedido o reserva y te asesoraremos adecuadamente.' },
        { q: '🕐 ¿Cuál es el horario de apertura?', a: 'Todos los restaurantes abren de 13:00 a 16:00 y de 20:00 a 23:30. Los domingos solo abrimos en horario de comida (13:00-16:00). Sushin Balmes tiene horario extendido por la noche hasta las 00:00. Los horarios pueden variar en festivos; consulta nuestra web o redes sociales.' },
        { q: '🐕 ¿Aceptan mascotas?', a: 'En nuestras terrazas son bienvenidas las mascotas. En el interior, consulta con cada local ya que depende de la normativa vigente. Te recomendamos avisar al hacer la reserva.' },
        { q: '💼 ¿Cómo puedo trabajar con vosotros?', a: 'Envíanos tu CV a careers@sushinbarcelona.com indicando la posición a la que aspiras (cocina, sala, reparto, etc.). Buscamos personas apasionadas por la gastronomía japonesa y la atención al cliente. Revisamos todas las solicitudes.' },
        { q: '🅿️ ¿Tienen aparcamiento?', a: 'Sushin Mataró dispone de parking propio gratuito para clientes. Los locales de Barcelona (Viladomat, Sant Gervasi, Balmes) tienen parkings públicos cercanos con tarifa reducida si presentas el ticket del restaurante. Pregunta al personal para más detalles.' },
        { q: '🎂 ¿Puedo celebrar un cumpleaños o evento especial?', a: '¡Por supuesto! Nos encanta celebrar contigo. Avísanos al reservar y te prepararemos una sorpresa especial (tarta de mochi incluida). También podemos organizar menús personalizados, decoración temática y brindis. Consulta condiciones.' },
        { q: '💳 ¿Qué formas de pago aceptan?', a: 'Aceptamos efectivo, tarjeta (Visa, Mastercard, American Express), bizum y gift card del restaurante. No aceptamos cheques. El pago se realiza al finalizar la comida o al recoger el pedido.' },
        { q: '📶 ¿Hay WiFi gratuito?', a: 'Sí, todos nuestros locales disponen de WiFi gratuito para clientes. Pregunta la contraseña al personal. La conexión es estable y sin límite de tiempo.' },
        { q: '🍷 ¿Tienen carta de vinos y bebidas?', a: 'Sí, contamos con una selección de vinos, sake, cerveza japonesa (Asahi, Kirin), refrescos, cócteles sin alcohol y postres típicos. Pregunta por nuestras recomendaciones de maridaje.' },
        { q: '🪑 ¿Hay tronas para bebés?', a: 'Sí, en todos los restaurantes disponemos de tronas y cambiadores en los baños. Además, ofrecemos menú infantil (10€) que incluye mini rolls + postre. Avísanos al reservar para garantizar disponibilidad.' }
    ],
    ca: [
        { q: '📍 On estan ubicats els restaurants?', a: 'Tenim quatre ubicacions a Barcelona:<br>- Sushin Mataró: Carrer de Barcelona, 23, Mataró<br>- Sushin Viladomat: Carrer de Viladomat, 42, Barcelona<br>- Sushin Sant Gervasi: Carrer de Sant Gervasi, 15, Barcelona<br>- Sushin Balmes: Carrer de Balmes, 301, Barcelona.<br>Tots estan ben comunicats i a prop del transport públic.' },
        { q: '📅 Com puc fer una reserva?', a: 'Pots reservar de diverses maneres:<br>• A la nostra web, a través del formulari de reserves.<br>• Per telèfon: +34 900 123 456 (horari de restaurant).<br>• Per WhatsApp: +34 637 123 456.<br>• Directament al local.<br>Recomanem reservar amb antelació, especialment els caps de setmana. Les reserves es mantenen 15 minuts després de l\'hora acordada.' },
        { q: '🛵 Oferiu servei de delivery?', a: 'Sí, fem delivery a zones properes a cada restaurant. El temps mitjà de lliurament és de 35-45 minuts. La comanda mínima és de 15€. Pots fer la teva comanda a través de la nostra web o trucant al restaurant. També oferim takeaway (recollida al local).' },
        { q: '🌱 Teniu opcions vegetarianes/veganes?', a: 'I tant. Comptem amb una àmplia varietat de plats vegetarians i vegans:<br>• Rolls vegetarians: Vegetal Roll (9.90€), Maki Cogombre, Maki Alvocat.<br>• Nigiri Vegà (3.20€).<br>• Amanida Miso (9.90€) sense peix.<br>• Gyozes vegetals (8.50€).<br>• També podem adaptar altres plats sota petició. Pregunta al nostre personal.' },
        { q: '🎁 Puc utilitzar la Targeta Regal a qualsevol restaurant?', a: 'Sí, les Targetes Regal són vàlides als quatre restaurants del grup (Sushin Mataró, Viladomat, Sant Gervasi i Balmes). Tenen una validesa de 12 mesos des de la data de compra. Pots adquirir-les en format digital (25€, 50€, 100€) i enviar-les per correu electrònic.' },
        { q: '👥 Feu menús per a grups o esdeveniments privats?', a: 'Sí, oferim menús especials per a grups de 8 a 30 persones des de 35€/persona. Inclou:<br>• Menú degustació personalitzat.<br>• Zona privada disponible a tots els locals.<br>• Opcions de beguda i postres incloses.<br>• Possibilitat d\'adaptar a al·lèrgies o preferències.<br>Contacta\'ns per sol·licitar un pressupost sense compromís.' },
        { q: '⚠️ Teniu informació d\'al·lèrgens?', a: 'Sí, disposem d\'informació detallada d\'al·lèrgens per a tots els plats. Manipulem crustacis, peix, gluten, lactosa, fruits secs, sèsam, soja i altres al·lèrgens. Si teniu alguna al·lèrgia o intolerància, indiqueu-ho al personal en fer la comanda o reserva i us assessorarem adequadament.' },
        { q: '🕐 Quin és l\'horari d\'obertura?', a: 'Tots els restaurants obren de 13:00 a 16:00 i de 20:00 a 23:30. Els diumenges només obrim en horari de dinar (13:00-16:00). Sushin Balmes té horari ampliat per la nit fins a les 00:00. Els horaris poden variar en festius; consulteu la nostra web o xarxes socials.' },
        { q: '🐕 Accepteu mascotes?', a: 'A les nostres terrasses són benvingudes les mascotes. A l\'interior, consulteu amb cada local ja que depèn de la normativa vigent. Us recomanem avisar en fer la reserva.' },
        { q: '💼 Com puc treballar amb vosaltres?', a: 'Envieu-nos el vostre CV a careers@sushinbarcelona.com indicant la posició a la qual aspireu (cuina, sala, repartiment, etc.). Busquem persones apassionades per la gastronomia japonesa i l\'atenció al client. Revisem totes les sol·licituds.' },
        { q: '🅿️ Teniu aparcament?', a: 'Sushin Mataró disposa de pàrquing propi gratuït per a clients. Els locals de Barcelona (Viladomat, Sant Gervasi, Balmes) tenen pàrquings públics propers amb tarifa reduïda si presenteu el tiquet del restaurant. Pregunteu al personal per a més detalls.' },
        { q: '🎂 Puc celebrar un aniversari o esdeveniment especial?', a: 'I tant! Ens encanta celebrar-ho amb tu. Avisa\'ns en reservar i et prepararem una sorpresa especial (pastís de mochi inclòs). També podem organitzar menús personalitzats, decoració temàtica i brindis. Consulteu condicions.' },
        { q: '💳 Quines formes de pagament accepteu?', a: 'Acceptem efectiu, targeta (Visa, Mastercard, American Express), bizum i targeta regal del restaurant. No acceptem xecs. El pagament es realitza al finalitzar l\'àpat o en recollir la comanda.' },
        { q: '📶 Hi ha WiFi gratuït?', a: 'Sí, tots els nostres locals disposen de WiFi gratuït per a clients. Pregunteu la contrasenya al personal. La connexió és estable i sense límit de temps.' },
        { q: '🍷 Teniu carta de vins i begudes?', a: 'Sí, comptem amb una selecció de vins, sake, cervesa japonesa (Asahi, Kirin), refrescos, còctels sense alcohol i postres típics. Pregunteu per les nostres recomanacions de maridatge.' },
        { q: '🪑 Hi ha trones per a nadons?', a: 'Sí, a tots els restaurants disposem de trones i canviadors als banys. A més, oferim menú infantil (10€) que inclou mini rolls + postres. Avisa\'ns en reservar per garantir disponibilitat.' }
    ]
};

// =============================================
// 2. ESTADO GLOBAL DE LA APLICACIÓN
// =============================================
const AppState = {
    currentCategory: 'top-rolls',
    currentResto: (typeof window !== 'undefined' && window.currentResto) ? window.currentResto : 'all',
    isLoggedIn: false,
    chatContext: { history: [], pendingBooking: null, lastIntent: null }
};

if (AppState.currentResto === 'sushin') AppState.currentResto = RESTO_IDS.BALMES;

// =============================================
// 3. FUNCIONES UTILITARIAS
// =============================================
const Utils = {
    debounce(fn, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, args), delay);
        };
    },
    escapeHTML(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },
    t(key, params = {}) {
        if (window.I18n && typeof window.I18n.t === 'function') {
            return window.I18n.t(key, params);
        }
        return key;
    },
    showToast(message, type = 'info', duration = 4000) {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        const toast = document.createElement('div');
        const colors = {
            success: 'border-green-500 bg-green-500/10',
            error: 'border-red-500 bg-red-500/10',
            info: 'border-brand-gold bg-brand-gold/10',
            warning: 'border-yellow-500 bg-yellow-500/10'
        };
        const icons = { success: 'check-circle', error: 'alert-circle', info: 'info', warning: 'alert-triangle' };
        toast.className = `toast-notification flex items-center gap-3 px-5 py-3 rounded-xl border ${colors[type] || colors.info} backdrop-blur-lg shadow-lg`;
        toast.innerHTML = `<i data-lucide="${icons[type] || icons.info}" class="w-5 h-5 flex-shrink-0"></i><span class="text-sm text-white">${this.escapeHTML(message)}</span>`;
        container.appendChild(toast);
        lucide.createIcons({ nodes: [toast] });
        setTimeout(() => { toast.classList.add('removing'); setTimeout(() => toast.remove(), 300); }, duration);
    }
};

// =============================================
// 4. MÓDULO DE MENÚ (Bilingüe)
// =============================================
const MenuModule = {
    render() {
        const grid = document.getElementById('menuGrid');
        if (!grid) return;
        const lang = getCurrentLang();
        const menuLang = MENU_DATA[lang] || MENU_DATA.es;
        const items = menuLang[AppState.currentCategory] || [];
        const filtered = AppState.currentResto === 'all' ? items : items.filter(item => item.available.includes(AppState.currentResto));

        if (filtered.length === 0) {
            const msg = Utils.t('menuNotAvailable') || (lang === 'ca' ? 'Aquest plat no està disponible en aquest restaurant' : 'Este plato no está disponible en este restaurante');
            grid.innerHTML = `<div class="col-span-full text-center py-16"><span class="text-5xl block mb-4">🍣</span><p class="text-gray-500">${msg}</p></div>`;
            return;
        }

        grid.innerHTML = filtered.map((item, i) => `
            <div class="menu-item-enter bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-brand-gold/50 transition-all duration-300 hover:bg-gray-900/80 group" style="animation-delay: ${i * 0.05}s;">
                <div class="flex items-start justify-between gap-3">
                    <div class="flex-1">
                        <div class="flex items-center gap-2 flex-wrap">
                            <h4 class="font-semibold text-white group-hover:text-brand-gold transition-colors">${Utils.escapeHTML(item.name)}</h4>
                            ${item.tag ? `<span class="text-xs px-2 py-0.5 bg-brand-gold/20 text-brand-gold rounded-full font-semibold">${Utils.escapeHTML(item.tag)}</span>` : ''}
                        </div>
                        <p class="text-gray-500 text-sm mt-1.5 leading-relaxed">${Utils.escapeHTML(item.desc)}</p>
                    </div>
                    <span class="font-display text-2xl text-brand-gold whitespace-nowrap">${item.price}€</span>
                </div>
            </div>
        `).join('');
    },

    activateRestoTab() {
        if (!window.currentResto) return;
        let restoId = window.currentResto;
        if (restoId === 'sushin') restoId = RESTO_IDS.BALMES;
        const targetTab = document.querySelector(`.resto-tab[data-resto="${restoId}"]`);
        if (!targetTab) return;
        document.querySelectorAll('.resto-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
        targetTab.classList.add('active');
        targetTab.setAttribute('aria-selected', 'true');
    }
};

// =============================================
// 5. MÓDULO DE FAQ (Bilingüe)
// =============================================
const FAQModule = {
    render() {
        const container = document.getElementById('faqContainer');
        if (!container) return;
        const lang = getCurrentLang();
        const faqLang = FAQ_DATA[lang] || FAQ_DATA.es;
        container.innerHTML = faqLang.map((item, i) => `
            <div class="faq-item border border-gray-800 rounded-xl overflow-hidden" data-index="${i}" role="listitem">
                <button class="faq-question w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-900/50 transition-colors" aria-expanded="false" aria-controls="faqAnswer${i}">
                    <span class="text-white font-medium text-sm sm:text-base pr-4">${Utils.escapeHTML(item.q)}</span>
                    <span class="faq-icon text-brand-gold flex-shrink-0"><i data-lucide="plus" class="w-5 h-5"></i></span>
                </button>
                <div class="faq-answer px-6 pb-5" id="faqAnswer${i}" role="region"><p class="text-gray-400 text-sm leading-relaxed">${item.a}</p></div>
            </div>
        `).join('');
    },

    toggle(index) {
        const items = document.querySelectorAll('.faq-item');
        items.forEach((item, i) => {
            const btn = item.querySelector('.faq-question');
            if (i === index) {
                const isOpen = item.classList.contains('open');
                item.classList.toggle('open');
                btn.setAttribute('aria-expanded', !isOpen);
            } else {
                item.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            }
        });
    }
};

// =============================================
// 6. MÓDULO DE CHAT (IA) – Bilingüe
// =============================================
const ChatModule = {
    init() {
        const container = document.getElementById('aiChatMessages');
        if (!container) return;
        container.innerHTML = '';
        const welcome = Utils.t('chatWelcome') || "🍣 ¡Hola! Soy el asistente de Sushin Barcelona. Puedo ayudarte con información sobre nuestra carta, reservas, delivery, gift cards y mucho más. ¿En qué te ayudo hoy?";
        this.appendMessage('assistant', welcome);
    },

    refreshLanguage() {
        this.init();
        const input = document.getElementById('aiChatInput');
        if (input) input.placeholder = Utils.t('chatPlaceholder') || 'Escribe tu pregunta...';
    },

    appendMessage(role, content) {
        const container = document.getElementById('aiChatMessages');
        if (!container) return;
        const div = document.createElement('div');
        div.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'}`;
        const bgColor = role === 'user' ? 'bg-brand-gold text-brand-dark' : 'bg-gray-800 text-gray-200';
        const label = role === 'user' ? (getCurrentLang() === 'ca' ? 'Tu' : 'Tú') : '🤖';
        div.innerHTML = `<div class="${bgColor} px-4 py-2.5 rounded-2xl max-w-[85%] text-sm leading-relaxed"><strong class="block text-xs mb-1 opacity-70">${label}</strong>${content.replace(/\n/g, '<br>')}</div>`;
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    },

    sendMessage(text) {
        const input = document.getElementById('aiChatInput');
        const msg = text || (input ? input.value.trim() : '');
        if (!msg) return;
        this.appendMessage('user', msg);
        if (input) input.value = '';

        const typingDiv = document.createElement('div');
        typingDiv.className = 'flex justify-start items-center gap-1.5 text-gray-400 text-sm';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
        const messagesContainer = document.getElementById('aiChatMessages');
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        setTimeout(() => {
            document.getElementById('typingIndicator')?.remove();
            this.appendMessage('assistant', this.generateResponse(msg));
        }, 600 + Math.random() * 400);
    },

    detectIntent(message) {
        const lower = message.toLowerCase();
        if (/men[úu]|carta|platos|recomiendas|sugerencia|plats|recomanes/i.test(lower)) return 'menu';
        if (/precio|cu[aá]nto cuesta|coste|preu|quant costa|€/i.test(lower)) return 'price';
        if (/direcci[oó]n|ubicaci[oó]n|d[oó]nde est[áa]|adreça|on esteu/i.test(lower)) return 'location';
        if (/horario|abierto|cierre|horari|obert/i.test(lower)) return 'hours';
        if (/promoci[oó]n|oferta|descuento|2x1|promoció|descompte/i.test(lower)) return 'promo';
        if (/reservar|reserva|mesa|taula/i.test(lower)) return 'reservation';
        if (/gift|tarjeta|regalo|targeta|regal/i.test(lower)) return 'gift';
        if (/delivery|domicilio|pedir a casa|takeaway|domicili|comanda/i.test(lower)) return 'delivery';
        if (/vegetariano|vegano|sin carne|vegetarià|vegà|sense carn/i.test(lower)) return 'vegetarian';
        if (/alergia|gluten|lactosa|al·lèrgia/i.test(lower)) return 'allergy';
        if (/parking|aparcamiento|aparcament/i.test(lower)) return 'parking';
        if (/niños|trona|menú infantil|nens|infantil/i.test(lower)) return 'kids';
        if (/wifi/i.test(lower)) return 'wifi';
        if (/pago|tarjeta|efectivo|bizum|pagament|efectiu/i.test(lower)) return 'payment';
        if (/terraza|terrassa/i.test(lower)) return 'terrace';
        if (/trabajar|empleo|curriculum|treballar|feina/i.test(lower)) return 'work';
        if (/tel[eé]fono|whatsapp|contactar|telèfon|contacte/i.test(lower)) return 'contact';
        if (/cumpleaños|celebrar|evento|aniversari|celebrar/i.test(lower)) return 'birthday';
        if (/mascota|perro|mascotas|gos|mascota/i.test(lower)) return 'pets';
        if (/vino|sake|bebida|maridaje|vi|beguda|maridatge/i.test(lower)) return 'drinks';
        return 'general';
    },

    getFAQAnswer(keyword) {
        const lang = getCurrentLang();
        const faqLang = FAQ_DATA[lang] || FAQ_DATA.es;
        const found = faqLang.find(item => item.q.toLowerCase().includes(keyword));
        return found ? found.a.replace(/<br\s*\/?>/g, '\n').replace(/<[^>]*>/g, '') : null;
    },

    generateResponse(message) {
        const ctx = AppState.chatContext;
        const lower = message.toLowerCase();
        const intent = this.detectIntent(message);
        const lang = getCurrentLang();
        ctx.history.push({ role: 'user', content: message });
        if (ctx.history.length > 10) ctx.history.shift();

        if (ctx.pendingBooking && /s[ií]|vale|confirmar|d\'acord|ok/i.test(lower)) {
            ctx.pendingBooking = null;
            return Utils.t('chatReservationConfirmed') || (lang === 'ca' ? "✅ Reserva registrada! El nostre equip es posarà en contacte amb tu aviat per confirmar." : "✅ ¡Reserva registrada! Nuestro equipo te contactará pronto para confirmar.");
        }
        if (ctx.pendingBooking && /\bno\b|cancelar|cancel·lar/i.test(lower)) {
            ctx.pendingBooking = null;
            return Utils.t('chatReservationCancelled') || (lang === 'ca' ? "Entenc. Vols provar una altra data o nombre de comensals?" : "Entiendo. ¿Quieres probar otra fecha o número de comensales?");
        }

        let reply = '';
        if (intent === 'location') reply = this.getFAQAnswer('Dónde están') || Utils.t('chatLocationFallback') || (lang === 'ca' ? '📍 Tenim quatre ubicacions: Mataró, Viladomat, Sant Gervasi i Balmes.' : '📍 Tenemos cuatro ubicaciones: Mataró, Viladomat, Sant Gervasi y Balmes.');
        else if (intent === 'hours') reply = this.getFAQAnswer('horario') || Utils.t('chatHoursFallback') || (lang === 'ca' ? '🕐 Horari: 13:00-16:00 i 20:00-23:30 (diumenges només dinar).' : '🕐 Horario: 13:00-16:00 y 20:00-23:30 (domingos solo comida).');
        else if (intent === 'delivery') reply = this.getFAQAnswer('delivery') || Utils.t('chatDeliveryFallback') || (lang === 'ca' ? '🛵 Sí, fem delivery a zones properes (35-45 min). Comanda mínima 15€.' : '🛵 Sí, hacemos delivery en zonas cercanas (35-45 min). Pedido mínimo 15€.');
        else if (intent === 'vegetarian') reply = this.getFAQAnswer('vegetarianas') || Utils.t('chatVegetarianFallback') || (lang === 'ca' ? '🌱 Tenim opcions vegetarianes i veganes: Vegetal Roll, Nigiri Vegà, Gyozes vegetals, etc.' : '🌱 Tenemos opciones vegetarianas y veganas: Vegetal Roll, Nigiri Vegano, Gyozas vegetales, etc.');
        else if (intent === 'gift') reply = this.getFAQAnswer('Gift Card') || Utils.t('chatGiftFallback') || (lang === 'ca' ? '🎁 Targetes Regal de 25€, 50€ i 100€, vàlides 12 mesos als 4 restaurants.' : '🎁 Gift Cards de 25€, 50€ y 100€, válidas 12 meses en los 4 restaurantes.');
        else if (intent === 'reservation') {
            ctx.pendingBooking = {};
            reply = Utils.t('chatReservationPrompt') || (lang === 'ca' ? `📅 Per reservar, indica'ns data, hora i nombre de persones (ex: "4 per dissabte 25 a les 21h").` : `📅 Para reservar, indícanos fecha, hora y número de personas (ej: "4 para el sábado 25 a las 21h").`);
        } else {
            switch (intent) {
                case 'menu':
                    reply = lower.includes('recomienda') || lower.includes('recomanes')
                        ? Utils.t('chatMenuRecommendations') || (lang === 'ca' ? "Les meves recomanacions:\n🍣 Tokyo Roll (16.90€) – el més venut\n🔥 Barcelona Roll (18.50€) – tonyina i foie\n🍱 Combinat Sushin (24.90€) – complet" : "Mis recomendaciones:\n🍣 Tokyo Roll (16.90€) – el más vendido\n🔥 Barcelona Roll (18.50€) – atún y foie\n🍱 Combinado Sushin (24.90€) – completo")
                        : Utils.t('chatMenuGeneral') || (lang === 'ca' ? 'La nostra carta té més de 60 plats: rolls, nigiris, sashimi, combinats, postres. Quin tipus t\'interessa?' : 'Nuestra carta tiene más de 60 platos: rolls, nigiris, sashimi, combinados, postres. ¿Qué tipo te interesa?');
                    break;
                case 'price':
                    reply = Utils.t('chatPriceInfo') || (lang === 'ca' ? "Preus orientatius:\n- Rolls: 10.90€ - 18.50€\n- Nigiris: 3.20€ - 6.50€\n- Sashimi: 14.90€ - 24.90€\n- Combinat Sushin: 24.90€" : "Precios orientativos:\n- Rolls: 10.90€ - 18.50€\n- Nigiris: 3.20€ - 6.50€\n- Sashimi: 14.90€ - 24.90€\n- Combinado Sushin: 24.90€");
                    break;
                case 'promo':
                    reply = Utils.t('chatPromoInfo') || (lang === 'ca' ? "🎉 Promocions: 10% dte. comandes >30€, menú degustació 25€ (dll-dij), 2x1 en makis (happy hour dll-dc 18-20h)." : "🎉 Promociones: 10% dto. pedidos >30€, menú degustación 25€ (lun-jue), 2x1 en makis (happy hour lun-mi 18-20h).");
                    break;
                case 'allergy':
                    reply = this.getFAQAnswer('alérgenos') || Utils.t('chatAllergyInfo') || (lang === 'ca' ? '⚠️ Disposem d\'informació d\'al·lèrgens. Manipulem crustacis, peix, gluten, lactosa, fruits secs, sèsam i soja.' : '⚠️ Disponemos de información de alérgenos. Manipulamos crustáceos, pescado, gluten, lactosa, frutos secos, sésamo y soja.');
                    break;
                case 'parking':
                    reply = this.getFAQAnswer('aparcamiento') || Utils.t('chatParkingInfo') || (lang === 'ca' ? '🅿️ Aparcament: Mataró disposa de pàrquing propi gratuït. A Barcelona, pàrquings públics propers amb tarifa reduïda.' : '🅿️ Parking: Mataró dispone de parking propio gratuito. En Barcelona, parkings públicos cercanos con tarifa reducida.');
                    break;
                case 'kids':
                    reply = this.getFAQAnswer('tronas') || Utils.t('chatKidsInfo') || (lang === 'ca' ? '👶 Sí, tenim trones, canviadors i menú infantil (10€). Avisa\'ns en reservar.' : '👶 Sí, tenemos tronas, cambiadores y menú infantil (10€). Avísanos al reservar.');
                    break;
                case 'wifi':
                    reply = this.getFAQAnswer('WiFi') || Utils.t('chatWifiInfo') || (lang === 'ca' ? '📶 WiFi gratuït a tots els locals. Pregunta la contrasenya al personal.' : '📶 WiFi gratuito en todos los locales. Pregunta la contraseña al personal.');
                    break;
                case 'payment':
                    reply = this.getFAQAnswer('formas de pago') || Utils.t('chatPaymentInfo') || (lang === 'ca' ? '💳 Acceptem efectiu, targeta (Visa/Mastercard/Amex), bizum i targeta regal.' : '💳 Aceptamos efectivo, tarjeta (Visa/Mastercard/Amex), bizum y gift card.');
                    break;
                case 'terrace':
                    reply = Utils.t('chatTerraceInfo') || (lang === 'ca' ? '☀️ Terrasses disponibles a Mataró, Viladomat i Sant Gervasi (subjecte a climatologia).' : '☀️ Terrazas disponibles en Mataró, Viladomat y Sant Gervasi (sujeto a climatología).');
                    break;
                case 'work':
                    reply = this.getFAQAnswer('trabajar') || Utils.t('chatWorkInfo') || (lang === 'ca' ? '💼 Envia el teu CV a careers@sushinbarcelona.com. Busquem personal de sala, cuina i repartiment.' : '💼 Envía tu CV a careers@sushinbarcelona.com. Buscamos personal de sala, cocina y reparto.');
                    break;
                case 'contact':
                    reply = Utils.t('chatContactInfo') || (lang === 'ca' ? '📞 Telèfon: +34 900 123 456 | WhatsApp: +34 637 123 456 | info@sushinbarcelona.com' : '📞 Teléfono: +34 900 123 456 | WhatsApp: +34 637 123 456 | info@sushinbarcelona.com');
                    break;
                case 'birthday':
                    reply = this.getFAQAnswer('cumpleaños') || Utils.t('chatBirthdayInfo') || (lang === 'ca' ? '🎂 Ens encanta celebrar! Avisa\'ns en reservar i et prepararem una sorpresa (pastís de mochi inclòs).' : '🎂 ¡Nos encanta celebrar! Avísanos al reservar y te prepararemos una sorpresa (tarta de mochi incluida).');
                    break;
                case 'pets':
                    reply = this.getFAQAnswer('mascotas') || Utils.t('chatPetsInfo') || (lang === 'ca' ? '🐕 A les nostres terrasses són benvingudes les mascotes. A l\'interior, consulta amb cada local.' : '🐕 En nuestras terrazas son bienvenidas las mascotas. En el interior, consulta con cada local.');
                    break;
                case 'drinks':
                    reply = this.getFAQAnswer('bebidas') || Utils.t('chatDrinksInfo') || (lang === 'ca' ? '🍷 Carta de begudes: vins, sake, cervesa japonesa (Asahi, Kirin), còctels sense alcohol.' : '🍷 Carta de bebidas: vinos, sake, cerveza japonesa (Asahi, Kirin), cócteles sin alcohol.');
                    break;
                default:
                    if (/hola|buenas|hey|buenos|bon dia|bona tarda/i.test(lower))
                        reply = Utils.t('chatGreeting') || (lang === 'ca' ? "🍣 Hola! Soc l'assistent de Sushin Barcelona. Puc ajudar-te amb: carta, preus, reserves, delivery, targetes regal, horaris, ubicacions..." : "🍣 ¡Hola! Soy el asistente de Sushin Barcelona. Puedo ayudarte con: carta, precios, reservas, delivery, gift cards, horarios, ubicaciones...");
                    else if (/gracias|thank|thanks|gràcies|merci/i.test(lower))
                        reply = Utils.t('chatThanks') || (lang === 'ca' ? "De res! És un plaer ajudar-te. 😊" : "¡De nada! Es un placer ayudarte. 😊");
                    else
                        reply = Utils.t('chatFallback') || (lang === 'ca' ? "No he entès bé la teva consulta. Puc ajudar-te amb:\n📍 Adreces\n🕐 Horaris\n🍣 Carta i preus\n🛵 Delivery\n📅 Reserves\n🎁 Targetes Regal\n🌱 Vegetarià\n💼 Treball" : "No he entendido bien tu consulta. Puedo ayudarte con:\n📍 Direcciones\n🕐 Horarios\n🍣 Carta y precios\n🛵 Delivery\n📅 Reservas\n🎁 Gift Cards\n🌱 Vegetariano\n💼 Trabajo");
                    break;
            }
        }

        ctx.lastIntent = intent;
        ctx.history.push({ role: 'assistant', content: reply });
        return reply;
    }
};

// =============================================
// 7. MÓDULO DE AUTENTICACIÓN
// =============================================
const AuthModule = {
    updateUI(loggedIn) {
        const loggedInView = document.getElementById('loggedInView');
        const loginFormDiv = document.getElementById('loginForm');
        const registerFormDiv = document.getElementById('registerForm');
        if (!loggedInView || !loginFormDiv) return;

        if (loggedIn) {
            loggedInView.classList.remove('hidden');
            loginFormDiv.classList.add('hidden');
            if (registerFormDiv) registerFormDiv.classList.add('hidden');
            const stored = JSON.parse(localStorage.getItem('sushin_user') || '{}');
            const nameEl = document.getElementById('userNameDisplay');
            const emailEl = document.getElementById('userEmailDisplay');
            const avatarEl = document.getElementById('userAvatarInitial');
            if (nameEl) nameEl.innerText = stored.name || stored.email?.split('@')[0] || 'Usuario';
            if (emailEl) emailEl.innerText = stored.email || '';
            if (avatarEl) avatarEl.innerText = (stored.name?.[0] || stored.email?.[0] || 'U').toUpperCase();
        } else {
            loggedInView.classList.add('hidden');
            loginFormDiv.classList.remove('hidden');
            if (registerFormDiv) registerFormDiv.classList.add('hidden');
        }
    },

    init() {
        if (localStorage.getItem('sushin_user')) {
            AppState.isLoggedIn = true;
            this.updateUI(true);
        }
    }
};

// =============================================
// 8. INICIALIZACIÓN GLOBAL Y EVENT LISTENERS
// =============================================
function initApp() {
    lucide.createIcons();

    MenuModule.activateRestoTab();
    MenuModule.render();
    FAQModule.render();
    ChatModule.init();
    AuthModule.init();

    // Escuchar cambios de idioma
    window.addEventListener('languageChanged', () => {
        MenuModule.render();
        FAQModule.render();
        ChatModule.refreshLanguage();
        lucide.createIcons();
    });

    // Loading Screen
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        window.addEventListener('load', () => setTimeout(() => loadingScreen.classList.add('hidden'), 800));
        setTimeout(() => loadingScreen.classList.add('hidden'), 3000);
    }

    // Scroll Handler
    const scrollProgressFill = document.querySelector('.scroll-progress-fill');
    const navbar = document.getElementById('navbar');
    const stickyOrder = document.getElementById('stickyOrder');
    const backToTopBtn = document.getElementById('backToTop');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');

    const handleScroll = Utils.debounce(() => {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

        if (scrollProgressFill) scrollProgressFill.style.width = scrollPercent + '%';
        if (navbar) navbar.classList.toggle('nav-scrolled', scrollY > 80);
        if (stickyOrder) stickyOrder.classList.toggle('visible', scrollY > 600);
        if (backToTopBtn) backToTopBtn.classList.toggle('visible', scrollY > 800);

        let currentSection = '';
        sections.forEach(section => { if (scrollY >= section.offsetTop - 120) currentSection = section.getAttribute('id'); });
        navLinks.forEach(link => { link.classList.toggle('active-section', link.dataset.section === currentSection); });
    }, 16);
    window.addEventListener('scroll', handleScroll, { passive: true });

    if (backToTopBtn) backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Mobile Menu
    const menuToggle = document.getElementById('menuToggle'), menuClose = document.getElementById('menuClose'), mobileMenu = document.getElementById('mobileMenu'), menuOverlay = document.getElementById('menuOverlay');
    const openMenu = () => { mobileMenu?.classList.add('open'); menuOverlay?.classList.remove('hidden'); document.body.style.overflow = 'hidden'; menuToggle?.setAttribute('aria-expanded', 'true'); };
    const closeMenu = () => { mobileMenu?.classList.remove('open'); menuOverlay?.classList.add('hidden'); document.body.style.overflow = ''; menuToggle?.setAttribute('aria-expanded', 'false'); };
    menuToggle?.addEventListener('click', openMenu);
    menuClose?.addEventListener('click', closeMenu);
    menuOverlay?.addEventListener('click', closeMenu);
    document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', closeMenu));

    // Scroll Reveal
    const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }); }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || !href) return;
            const target = document.querySelector(href);
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
    });

    // Event Delegation
    document.addEventListener('click', (e) => {
        const giftBtn = e.target.closest('.gift-card-btn');
        if (giftBtn) {
            e.preventDefault();
            const card = giftBtn.closest('.gift-card');
            const amount = card?.dataset.amount || 'desconocido';
            const msg = Utils.t('toastGiftAdded', { amount }) || `Gift card de ${amount}€ añadida al carrito (demo)`;
            Utils.showToast(msg, 'success', 3000);
            return;
        }
        const cardBtn = e.target.closest('[data-stop-propagation]');
        if (cardBtn) { e.stopPropagation(); return; }
        const faqBtn = e.target.closest('.faq-question');
        if (faqBtn) {
            const item = faqBtn.closest('.faq-item');
            if (item) { const index = parseInt(item.dataset.index); if (!isNaN(index)) FAQModule.toggle(index); }
            return;
        }
        const quickReply = e.target.closest('.quick-reply');
        if (quickReply) {
            const action = quickReply.getAttribute('data-action') || 'message';
            const msg = quickReply.getAttribute('data-msg');
            const url = quickReply.getAttribute('data-url');
            if (action === 'navigate' && url) { if (msg) ChatModule.appendMessage('assistant', msg); setTimeout(() => { window.location.href = url; }, 500); }
            else { if (msg) ChatModule.sendMessage(msg); }
            return;
        }
    });

    // Newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('newsletterEmail');
            const email = emailInput?.value.trim();
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                Utils.showToast(Utils.t('toastSubscribeError') || 'Por favor, introduce un email válido', 'error', 3000);
                return;
            }
            Utils.showToast(Utils.t('toastSubscribeSuccess') || '¡Suscripción realizada! Recibirás nuestras novedades.', 'success', 3000);
            emailInput.value = '';
        });
    }

    // Cookie Consent
    const cookieBanner = document.getElementById('cookieConsent');
    if (cookieBanner) {
        const consent = localStorage.getItem('cookieConsent');
        if (consent === null) cookieBanner.classList.remove('hidden'); else cookieBanner.classList.add('hidden');
        document.getElementById('cookieAccept')?.addEventListener('click', () => { localStorage.setItem('cookieConsent', 'accepted'); cookieBanner.classList.add('hidden'); Utils.showToast(Utils.t('toastCookieSaved') || 'Preferencias guardadas', 'success', 2000); });
        document.getElementById('cookieReject')?.addEventListener('click', () => { localStorage.setItem('cookieConsent', 'rejected'); cookieBanner.classList.add('hidden'); Utils.showToast(Utils.t('toastCookieRejected') || 'Cookies rechazadas', 'info', 2000); });
    }

    // Chat Form
    const chatForm = document.getElementById('chatForm');
    if (chatForm) chatForm.addEventListener('submit', (e) => { e.preventDefault(); ChatModule.sendMessage(); });

    // Chat Panel Toggle
    const aiChatBtn = document.getElementById('aiChatBtn'), aiChatPanel = document.getElementById('aiChatPanel'), aiChatClose = document.getElementById('aiChatClose');
    if (aiChatBtn && aiChatPanel) {
        aiChatBtn.addEventListener('click', (e) => { e.stopPropagation(); aiChatPanel.classList.toggle('open'); aiChatBtn.setAttribute('aria-expanded', aiChatPanel.classList.contains('open')); });
        aiChatClose?.addEventListener('click', () => { aiChatPanel.classList.remove('open'); aiChatBtn.setAttribute('aria-expanded', 'false'); });
        document.addEventListener('click', (e) => { if (!aiChatPanel.contains(e.target) && !aiChatBtn.contains(e.target) && aiChatPanel.classList.contains('open')) { aiChatPanel.classList.remove('open'); aiChatBtn.setAttribute('aria-expanded', 'false'); } });
    }

    // Login Modal
    const loginModal = document.getElementById('loginModal');
    const openModal = () => loginModal?.classList.add('show');
    const closeModal = () => loginModal?.classList.remove('show');
    document.querySelectorAll('#userBtnDesktop, #userBtnMobile').forEach(btn => btn.addEventListener('click', openModal));
    document.getElementById('loginOverlay')?.addEventListener('click', closeModal);
    document.getElementById('loginCloseBtn')?.addEventListener('click', closeModal);

    document.querySelectorAll('.login-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const isLogin = tab.dataset.tab === 'login';
            document.getElementById('loginForm')?.classList.toggle('hidden', !isLogin);
            document.getElementById('registerForm')?.classList.toggle('hidden', isLogin);
        });
    });

    document.getElementById('loginSubmit')?.addEventListener('click', () => {
        const email = document.getElementById('loginEmail')?.value, pass = document.getElementById('loginPassword')?.value, errorEl = document.getElementById('loginError');
        if (email && pass) {
            AppState.isLoggedIn = true; localStorage.setItem('sushin_user', JSON.stringify({ email, name: email.split('@')[0] })); AuthModule.updateUI(true); closeModal();
            Utils.showToast(Utils.t('toastLoginSuccess') || 'Sesión iniciada correctamente', 'success', 2000);
            if (errorEl) errorEl.classList.add('hidden');
        } else { if (errorEl) { errorEl.innerText = Utils.t('loginErrorEmail') || 'Email o contraseña incorrectos'; errorEl.classList.remove('hidden'); } }
    });

    document.getElementById('registerSubmit')?.addEventListener('click', () => {
        const name = document.getElementById('regName')?.value, email = document.getElementById('regEmail')?.value, pass = document.getElementById('regPassword')?.value, errorEl = document.getElementById('registerError');
        if (name && email && pass && pass.length >= 6) {
            AppState.isLoggedIn = true; localStorage.setItem('sushin_user', JSON.stringify({ name, email })); AuthModule.updateUI(true); closeModal();
            Utils.showToast(Utils.t('toastRegisterSuccess') || 'Cuenta creada correctamente', 'success', 2000);
            if (errorEl) errorEl.classList.add('hidden');
        } else { if (errorEl) { errorEl.innerText = Utils.t('registerErrorFields') || 'Error: completa todos los campos (contraseña mín. 6 caracteres)'; errorEl.classList.remove('hidden'); } }
    });

    document.getElementById('logoutBtn')?.addEventListener('click', () => { AppState.isLoggedIn = false; localStorage.removeItem('sushin_user'); AuthModule.updateUI(false); closeModal(); Utils.showToast(Utils.t('toastLogoutSuccess') || 'Sesión cerrada', 'info', 2000); });

    // Resto Tabs
    document.querySelectorAll('.resto-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.resto-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
            tab.classList.add('active'); tab.setAttribute('aria-selected', 'true');
            AppState.currentResto = tab.dataset.resto; MenuModule.render();
        });
    });

    // Categoría Tabs
    document.querySelectorAll('.menu-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            AppState.currentCategory = tab.dataset.category;
            MenuModule.render();
        });
    });
}

document.addEventListener('DOMContentLoaded', initApp);