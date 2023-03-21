interface TweetProps {
  User: string,
  Content: string
}
export function Tweet(props: TweetProps) {
  return (
    <div>
      <p>{props.User}</p>
      <button>{props.Content}</button>
    </div>
  )
}