document.addEventListener('DOMContentLoaded', () => {
  // Sidebar toggle
  const toggleButton = document.querySelector('.toggle-sidebar')
  const sidebar = document.querySelector('.sidebar')
  const mainContent = document.querySelector('.main-content')

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed')
      mainContent.classList.toggle('collapsed')
    })
  }

  // Notification auto-hide
  const notification = document.querySelector('.notification')
  if (notification) {
    setTimeout(() => {
      notification.classList.add('hide')
      setTimeout(() => notification.remove(), 500)
    }, 5000)
  }

  // Add spinner to export buttons
  document.querySelectorAll('.action-button.export').forEach((button) => {
    button.addEventListener('click', () => {
      const spinner = document.createElement('span')
      spinner.classList.add('spinner')
      button.appendChild(spinner)
    })
  })

  // Modal functionality
  const modal = document.querySelector('#modal')
  const confirmButton = document.querySelector('#confirm-button')
  const cancelButton = document.querySelector('#cancel-button')

  if (modal) {
    document.querySelectorAll('.delete-button').forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault()
        modal.classList.remove('hidden')
      })
    })

    cancelButton.addEventListener('click', () => {
      modal.classList.add('hidden')
    })

    confirmButton.addEventListener('click', () => {
      modal.classList.add('hidden')
    // Add delete logic here
    })
  }
})
// para dashboard.html
document.addEventListener('DOMContentLoaded', () => {
  // Toggle Sidebar
  const toggleButton = document.querySelector('.toggle-sidebar')
  const sidebar = document.querySelector('.sidebar')
  const mainContent = document.querySelector('.main-content')

  toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed')
    mainContent.classList.toggle('collapsed')
  })
})
