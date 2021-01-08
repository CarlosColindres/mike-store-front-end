import { useState } from 'react'


interface Event {
  target: {
    name: string
    value: string
    type: string
    checked: boolean
  }
}

export const FormhandlerHook = (formInitialState: any) => {
    const [formValue, setFormValues] = useState(formInitialState)

    const onChange = (e:Event) => {
        const { name, value, type, checked } = e.target
        
        const valueToUse = type === 'checked' ? checked : value

        setFormValues({
            ...formValue, [name]: valueToUse
        })
    }

    return [formValue, setFormValues, onChange]
}

