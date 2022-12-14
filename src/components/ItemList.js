//Agrupador
import Item from './Item.js';

const ItemList = ({items}) => {

    return(
        <>
            {
            items.length > 0 
            ? items.map(item => (
                <div key={item.id}>
                    <div className="bg-white rounded shadow-sm py-5 px-4 m-2">
                        <Item id={item.id} name={item.name} imagen = {item.img} des={item.description} stock = {item.stock}/>
                    </div>
                </div>
            ))
            : <p>cargando...</p>
            }
        </>
    )
}
/************************************
 * Autor: Julieta Tatiana Castillo  *
 ************************************/
export default ItemList;