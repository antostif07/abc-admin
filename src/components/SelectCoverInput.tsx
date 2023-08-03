// @ts-nocheck
import { Avatar, Popover } from "@mui/material"
import { useState } from "react"
import { ImageSelector } from "./ImageSelector"
import { useChoicesContext, useInput } from "react-admin"

export const SelectCoverInput = ({source, label}) => {
    const {allChoices, selectedChoices} = useChoicesContext()
    const {field} = useInput({ source })
    const [value, setValue] = useState('')
    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl)
    const popOverId = open ? 'simple-popover' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

    return (
        <label htmlFor={popOverId}>
            <Avatar
                src={value ? `${import.meta.env.VITE_API_URL}${value.contentUrl}` : ''}
                onClick={handleClick}
            />
            {/* <input id={popOverId} {...field} value={value['@id']} hidden /> */}
            {/* {fieldState.error && <span>{fieldState.error.message}</span>} */}
            <Popover id={popOverId} open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
                <ImageSelector handleClick={(image) => {
                    setValue(image)
                    field.onChange(image['@id'])
                    setAnchorEl(null)
                }} />
            </Popover>
        </label>
    )
}