
export default function StoryTray({ stories }) {
    stories.push({
      id: 'create',
      label: 'Crear historia'
    });
  
    return (
      <ul>
        {stories.map(story => (
          <li key={story.id}>
            {story.label}
          </li>
        ))}
      </ul>
    );
  }
  