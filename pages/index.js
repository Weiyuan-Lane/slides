
export default function Home(){
  // Redirect logic if not Home
  if (process.browser && window.location.pathname !== '/') {
    window.location = '/'
  }

  return (
    <p>This is an empty page. It's like an easter egg</p>
  )
}
