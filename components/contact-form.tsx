"use client"

import { sendMessageAction } from "@/lib/actions"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useActionState, useEffect } from "react"
import { toast } from "sonner"
import { Loader } from "lucide-react"

type MessageState = {
  error?: string
  success?: boolean
  name?: string
  email?: string
  message?: string
}

export function ContactForm() {
  const [state, action, isPending] = useActionState<MessageState, FormData>(
    sendMessageAction,
    {}
  )

  useEffect(() => {
    if (state.error) {
      toast.error(state.error)
    }

    if (state.success) {
      toast.success("Thanks for your message!")
    }
  }, [state.error, state.success])

  return (
    <Card className="mx-auto mt-8 w-full max-w-lg">
      <CardHeader>
        <CardTitle>
          <h3 className="text-lg font-medium text-muted-foreground">
            Contact Form
          </h3>
        </CardTitle>
        <CardDescription>
          <p>Leave a message and I'll get back to you!</p>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form action={action}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="contact-name">Name</FieldLabel>
              <Input
                id="contact-name"
                type="text"
                name="name"
                defaultValue={state?.name}
                placeholder="John Doe"
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="contact-email">Email</FieldLabel>
              <Input
                id="contact-email"
                type="email"
                name="email"
                defaultValue={state?.email}
                placeholder="john@example.com"
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="contact-message">Message</FieldLabel>
              <Textarea
                id="contact-message"
                name="message"
                className="min-h-25"
                defaultValue={state?.message}
                placeholder="What's up?"
                required
              />
            </Field>

            <Button type="submit" size="lg" disabled={isPending}>
              {isPending && <Loader className="size-4 animate-spin" />}
              <span>Submit</span>
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
