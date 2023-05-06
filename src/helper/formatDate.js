import { formatDistanceToNow } from 'date-fns';
export default function FormatDate(prop) {
    return formatDistanceToNow(new Date(prop), { addSuffix: true })
    
}