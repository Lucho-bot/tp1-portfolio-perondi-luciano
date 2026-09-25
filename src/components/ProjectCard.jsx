
const ProjectCard = ({titulo, descripcion, tecnologias}) => {

    return (
        <article>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <p><strong>Tecnologias utilizadas: </strong>{tecnologias}</p>
        </article>
    )
}

export default ProjectCard;