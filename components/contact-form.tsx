"use client"

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

export function ContactForm() {
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
  }

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
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="contact-name">Name</FieldLabel>
              <Input
                id="contact-name"
                type="text"
                name="name"
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
                placeholder="What's up?"
                required
              />
            </Field>

            <Button type="submit" size="lg">
              Submit
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
