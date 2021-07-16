import { parseISO, format } from 'date-fns'

export default function Date({ date }) {
  const d = parseISO(date)
  return <time dateTime={date}>{format(d, "LLLL d, yyyy")}</time>
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}