const getData = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/articles');
    const users = await res.json();

    return users.data;
        
    } catch (error) {
        console.error('Error al consultar los articulos:', error);
    }
    
}

const saveArticle = async (article) => {
    try {
        const res = await fetch('http://localhost:3000/api/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        });

        if (res.ok) {
            const newArticle = await res.json();
            return newArticle;    
        }
        
    } catch (error) {
        console.error('Error al agregar el articulo:', error);
    }
}


const deleteArticle = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/article/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.ok) {
            return { success: true };
        } else {
            throw new Error('Error al eliminar el artículo');
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}


export {
    getData,
    saveArticle,
    deleteArticle
}