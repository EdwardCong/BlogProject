import { parseISO, format } from 'date-fns'
// Format dates 
export default function Date({ date }) {
  const d = parseISO(date)
  return <time dateTime={date}>{format(d, "d LLLL, yyyy")}</time>
}