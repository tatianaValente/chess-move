Projeto criado em React para desenvolver um app com os movimentod do cavalo em um tabuleiro de Xadrez usando o Drag and Drop da biblioteca React DnD (https://github.com/react-dnd/react-dnd)

## React DnD

### Criação de um novo projeto em React:
`npx create-react-app chess-movement`

### Adição da biblioteca de drag and drop:
`npm add react-dnd react-dnd-html5-backend`

### Componentes:
#### `<DndProvider />` - Fornece recursos React_DnD para seu aplicativo. Deve ser injetado com um back-end
##### Props obrigatórios:
-   backend: Um back-end do React DnD (HTML5Backend). 
##### Exemplo:
```
import { HTML5Backend } from 'react-dnd-html5-backend' 
import { DndProvider } from 'react-dnd' 
export default class YourApp {
  render() { 
    return ( 
      <DndProvider backend={HTML5Backend}>  
        /* Your Drag-and-Drop Application */ 
      </DndProvider> 
    )}}
```

### Hooks:

#### UseDrag  - Hook para usar o componente como fonte de arrasto (drag-source) 

##### Parâmteros:
-	spec: Objeto de especificação. Array:

[0] – objeto com propriedades da função collect()

[1] – função para a fonte de arrasto

[2] – função para a visualização de arrasto

  ► item (obrigatório): Um objeto que descreve os dados que estão sendo arrastados. Item.type deve ser definido (string).
  
  ► colect (opcional): uma maneira de transformar o estado do sistema de arrastar e soltar em objetos úteis para seus componentes.
  
##### Exemplo:
```
import { useDrag } from 'react-dnd'
function DraggableComponent(props) {
  const [collectedProps, drag] = useDrag({
    item: { id, type }
  })
  return <div ref={drag}>...</div>
 }
  ```


#### UseDrop - Hook para usar o componente como destino (drop target) 

##### Parâmteros:
-	spec: Objeto de especificação. Array:

[0] – objeto com propriedades da função collect()

[1] – função para a fonte de destino

  ► accept (obrigatório)
  
  ► colect (opcional): uma maneira de transformar o estado do sistema de arrastar e soltar em objetos úteis para seus componentes.

##### Exemplo:
```
import { useDrop } from 'react-dnd'
function myDropTarget(props) {
  const [collectedProps, drop] = useDrop({accept})
  return <div ref={drop}>Drop Target</div>
 }
  ```
