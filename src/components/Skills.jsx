
const Skills = () => {
  const habilidades = ['HTML', 'CSS', 'JavaScript', 'React', 'C#', 'Blazor', 'Git']

  return (
        <section>
            <h2>Habilidades</h2>
            <ul>
            {habilidades.map((habilidad) => (<li key={habilidad}>{habilidad}</li>))}
            </ul>
        </section>
    )
}

export default Skills