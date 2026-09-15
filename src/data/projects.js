// EDIT_ME: swap demoUrl / codeUrl for your real links once each project is published.
// Set either to null to show a disabled "not available" state instead of a broken link.
export const PROJECTS = [
  {
    id: 'habitflow',
    status: 'done',
    featured: true,
    tech: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'localStorage'],
    demoUrl: 'https://habitflow.nicolasmartinez.dev',
    codeUrl: 'https://github.com/nicolasmartinez-dev/habitflow',
    content: {
      es: {
        name: 'HabitFlow',
        description:
          'Seguimiento de hábitos con estadísticas y calendario semanal, pensado para ver el progreso de un vistazo sin necesidad de un backend.',
        problem:
          'Las apps de hábitos suelen esconder el progreso semanal detrás de varias pantallas. Quería una app rápida que mostrara rachas y avance sin fricción, y que funcionara sin depender de un servidor.',
        decisions: [
          'Persistencia local con localStorage para que el progreso sobreviva a recargas sin necesitar backend ni cuenta de usuario.',
          'Navegación entre vistas con React Router para separar el panel principal, el calendario semanal y las estadísticas.',
          'Cálculo de rachas y porcentaje de cumplimiento en el cliente, priorizando una lectura inmediata del progreso semanal.',
        ],
      },
      en: {
        name: 'HabitFlow',
        description:
          'Habit tracking with stats and a weekly calendar, built to show progress at a glance without needing a backend.',
        problem:
          'Habit apps often bury weekly progress behind several screens. I wanted a fast app that surfaced streaks and progress with no friction, and that worked without depending on a server.',
        decisions: [
          'Local persistence with localStorage so progress survives reloads with no backend or user account required.',
          'View navigation with React Router to separate the main dashboard, the weekly calendar, and the stats view.',
          'Streak and completion-rate calculations run on the client, prioritizing an immediate read of weekly progress.',
        ],
      },
    },
  },
  {
    id: 'todo-list',
    status: 'done',
    featured: false,
    tech: ['React', 'Tailwind CSS', 'react-router-dom'],
    demoUrl: 'https://todo.nicolasmartinez.dev',
    codeUrl: 'https://github.com/nicolasmartinez-dev/todo-list',
    content: {
      es: {
        name: 'To-Do List',
        description:
          'Aplicación de tareas con React y Tailwind CSS, enfocada en una base de componentes limpia y una experiencia simple de crear, completar y organizar tareas.',
        problem:
          'Necesitaba una base sólida en React para practicar manejo de estado, rutas y estilos utilitarios antes de escalar a proyectos más grandes como HabitFlow.',
        decisions: [
          'Componentes controlados para el formulario de tareas, manteniendo el estado como fuente única de verdad.',
          'Rutas con react-router-dom para separar la vista de lista activa y la de tareas completadas.',
          'Estilos con Tailwind CSS para iterar rápido en el diseño sin salir del componente.',
        ],
      },
      en: {
        name: 'To-Do List',
        description:
          'A task app built with React and Tailwind CSS, focused on a clean component base and a simple experience for creating, completing, and organizing tasks.',
        problem:
          'I needed a solid React foundation to practice state management, routing, and utility styling before scaling up to bigger projects like HabitFlow.',
        decisions: [
          'Controlled components for the task form, keeping state as the single source of truth.',
          'Routes with react-router-dom to separate the active list view from the completed tasks view.',
          'Styling with Tailwind CSS to iterate quickly on design without leaving the component.',
        ],
      },
    },
  },
  {
    id: 'ai-finance-tracker',
    status: 'in-progress',
    featured: false,
    tech: ['React', 'Node.js', 'AI'],
    demoUrl: null,
    codeUrl: null,
    content: {
      es: {
        name: 'AI Finance Tracker',
        description:
          'Aplicación de finanzas personales con asistencia de IA, pensada para categorizar gastos y sugerir ajustes de presupuesto.',
        problem: '',
        decisions: [],
      },
      en: {
        name: 'AI Finance Tracker',
        description:
          'A personal finance app with AI assistance, designed to categorize expenses and suggest budget adjustments.',
        problem: '',
        decisions: [],
      },
    },
  },
]
