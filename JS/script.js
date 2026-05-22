// DATOS DEL MENÚ
const menuItems = [
    { id: 1, 
    name: "Panini $60", 
    category: "Selección", 
    price: "$60", 
    description: "Panini crujiente por fuera, con queso fundido, jugoso relleno y un toque de sabor irresistible, 150g.", 
    image: "https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuaW5pfGVufDB8fDB8fHww", 
 },
    { 
    id: 2, 
    name: "Pay de limon $45", 
    category: "Tentación", 
    price: "$45", 
    description: "Pay de limón cremoso y fresco con base crujiente y un toque cítrico que despierta los sentidos, 120g.", 
    image: "https://images.unsplash.com/photo-1583350229873-e06b12acdb9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UGF5JTIwZGUlMjBsaW1vbnxlbnwwfHwwfHx8MA%3D%3D",

},
    { id: 3,
    name: "Latte frio $40", 
    category: "Bebidas", 
    price: "$40", 
    description: "Latte frío Cremoso café suave con un toque refrescante que enamora, 400ml.",
    image: "https://plus.unsplash.com/premium_photo-1723759448747-1d174225e61f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGF0dGUlMjBmcmlvfGVufDB8fDB8fHww", 
},
{ id: 4, 
    name: "Cheesecake de fresa $60", 
    category: "Tentación", 
    price: "$60", 
    description: "Cheesecake de Fresa cremoso, con base crujiente y un dulce irresistible, 120g.", 
    image: "https://plus.unsplash.com/premium_photo-1716540164282-de124b10a4c5?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
 },
 {id: 5,
    name: "Croissant de jamon $100", 
    category: "Selección", 
    price: "$100", 
    description: "Croissant relleno de jamón y queso, dorado y crujiente por fuera, suave y sabroso por dentro, 150g.", 
    image: "https://images.unsplash.com/photo-1696721496956-748e023b7a62?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyb2lzc2FudCUyMGRlJTIwamFtb24lMjBjb21pZGF8ZW58MHx8MHx8fDA%3D", 
 },
 {id: 6,
    name: "Malteada de Platano $90", 
    category: "Bebidas", 
    price: "$100", 
    description: "Malteada cremosa, dulce y refrescante, con trozos de platano en cada sorbo y un sabor que te encanta, 500ml.", 
    image: "https://plus.unsplash.com/premium_photo-1695035006295-d37b73003e27?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
 },
 {id: 7,
    name: "Hamburguesa $120", 
    category: "Selección", 
    price: "$120", 
    description: "Hamburguesa de res jugosa con queso, acompañada de crujientes papas fritas y aderezos 180g.", 
    image: "https://plus.unsplash.com/premium_photo-1695822019033-2dc9ed5dd092?q=80&w=825&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
 },
 { id: 8, 
    name: "Waffle $70", 
    category: "Tentación", 
    price: "$70", 
    description: "Waffle dorado y crujiente, acompañado de crema y jugosas moras azules, 120g.", 
    image: "https://plus.unsplash.com/premium_photo-1699469747361-9b4f1b1f6d0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
 },
  {id: 9,
    name: "Té de temporada $40", 
    category: "Bebidas", 
    price: "$35", 
    description: "Té aromático reconfortante, perfecto para disfrutar a cualquier hora, 400ml.", 
    image: "https://plus.unsplash.com/premium_photo-1730833407528-e451bc076b61?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
 },
    // Agrega más platos aquí...
];

// FILTRADO DEL MENÚ
function displayMenuItems(category = 'all') {
    const menuContainer = document.querySelector('.menu-items');
    
    // Limpiar el contenedor
    menuContainer.innerHTML = '';
    
    // Filtrar elementos según la categoría
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    // Mostrar mensaje si no hay elementos
    if (filteredItems.length === 0) {
        menuContainer.innerHTML = `
            <div class="no-items-message">
                <p>No hay elementos en esta categoría.</p>
            </div>
        `;
        return;
    }
    
    // Generar HTML para cada elemento del menú
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.dataset.category = item.category;
        
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span>${item.price}</span>
            </div>
        `;
        
        menuContainer.appendChild(menuItem);
    });
}

// Función para manejar los botones de filtrado
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Obtener la categoría del botón
            const category = button.dataset.category;
            
            // Mostrar los elementos de la categoría seleccionada
            displayMenuItems(category);
        });
    });
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(); // Carga todos los elementos al inicio
    setupFilterButtons(); // Configura los eventos de los botones de filtrado
});
