import { BaseEmoji, Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import { selectMode } from '../../../store/themeSlice' 
import { useAppSelector } from '../../../store/hooks'

type Props = { onClick: (emoji: BaseEmoji, event: React.MouseEvent) => void }

export default function EmojiPicker(props: Props) {
    const theme = useAppSelector(selectMode)

    return (
        <Picker
            theme={theme}
            showPreview={false}
            showSkinTones={false}
            onClick={props.onClick}
            color="primary"
        />
    )
}