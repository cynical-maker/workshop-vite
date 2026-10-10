import './style.css'
import { productos, formatoPesos } from './datos.js'
 
const categorias = ['todas', 'hombre', 'mujer', 'accesorios']
let filtro = 'todas'
const carrito = []
const app = document.querySelector('#app')
 
// Dibuja toda la página según el estado actual (filtro y carrito)
function render() {
  const visibles =
    filtro === 'todas' ? productos : productos.filter((p) => p.categoria === filtro)
  const total = carrito.reduce((suma, p) => suma + p.precio, 0)
 
  app.innerHTML = `
    <header class="encabezado">
      <h1>Brisa Moda · Vite</h1>
      <span class="carrito">Carrito: ${carrito.length} · ${formatoPesos.format(total)}</span>
    </header>
    <main>
      <div class="filtros">
        ${categorias
          .map((c) => `<button data-filtro="${c}" class="${c === filtro ? 'activo' : ''}">${c}</button>`)
          .join('')}
      </div>
      <div class="grilla">
        ${visibles
          .map(
            (p) => `
          <article class="tarjeta">
            <p class="categoria">${p.categoria}</p>
            <h2>${p.nombre}</h2>
            <p class="precio">${formatoPesos.format(p.precio)}</p>
            <button data-id="${p.id}">Agregar</button>
          </article>`,
          )
          .join('')}
      </div>
    </main>`
}
 
// Un solo «escuchador» para todos los botones (delegación de eventos)
app.addEventListener('click', (evento) => {
  const boton = evento.target.closest('button')
  if (!boton) return
  if (boton.dataset.filtro) filtro = boton.dataset.filtro
  if (boton.dataset.id) carrito.push(productos.find((p) => p.id === Number(boton.dataset.id)))
  render()
})
 
render()