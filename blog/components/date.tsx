import { parseISO, format } from 'date-fns'

// Format dates 
export default function Date({ date }: {date: string}) {
  const d = parseISO(date)
  return <time dateTime={date}>{format(d, "d LLLL, yyyy")}</time>
}