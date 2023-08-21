function FirstComponent(){

    const name = "Guilherme";
    return (
        <div className="firstcomponent">
            {/* Comentário no JSX*/}
            <p>Primeiro componente</p>
            <p>Nome: {name}</p>
        </div>
    )
}

export default FirstComponent;