import { Button, PasswordInput, Stack, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import React, { FC } from 'react'

type Props = {}

type FormValues = {
  currentPassword: string,
  newPassword: string
}

const SettingsPage: FC<Props> = () => {
  const { getInputProps, onSubmit } = useForm<FormValues>({
    initialValues: {
      currentPassword: "",
      newPassword: ""
    },
    validate: {
      currentPassword: value => value.length < 1 && "Please enter the current password",
      newPassword: value => value.length < 1 && "Please enter a new password"
    }
  })

  const handleSubmit = (values: FormValues) => {
    console.log(values)
  }

  return (
    <Stack ml={30}>
      <Text size={20}>Settings</Text>
      <form style={{ width: "20%" }} onSubmit={onSubmit(handleSubmit)}>
        <Stack>
          <PasswordInput variant='filled' label="Current Password:" {...getInputProps("currentPassword")} />
          <PasswordInput variant='filled' label="New Password:" {...getInputProps("newPassword")}/>
        </Stack>
        <Button mt={15} type='submit'>Change Password</Button>
      </form>
    </Stack>
  )
}

export default SettingsPage