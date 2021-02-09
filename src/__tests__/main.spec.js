import '@/main'

it('Can mount app', () => {
  document.body.innerHTML =
    '<div id="app">' +
    '</div>'

  const renderedEl = document.querySelector('.app-content')
  expect(renderedEl).toBeDefined()
});