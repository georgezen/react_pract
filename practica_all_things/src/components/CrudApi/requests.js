const getData = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/articles');
        const users = await res.json();

        return users.data;
    } catch (error) {
        console.error('Error al consultar los artículos:', error);
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
        console.error('Error al agregar el artículo:', error);
    }
}

const getArticleById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/article/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.ok) {
            const article = await res.json();
            return article;
        } else {
            throw new Error('Error al obtener el artículo');
        }
    } catch (error) {
        console.error('Error al obtener el artículo:', error);
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

const updateArticle = async (article) => {
    try {
        const res = await fetch(`http://localhost:3000/api/article/${article.id_article}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        });

        if (res.ok) {
            const updatedArticle = await res.json();
            return updatedArticle;
        } else {
            throw new Error('Error al actualizar el artículo');
        }
    } catch (error) {
        console.error('Error al actualizar el artículo:', error);
    }
}

export {
    getData,
    saveArticle,
    deleteArticle,
    getArticleById,
    updateArticle
}