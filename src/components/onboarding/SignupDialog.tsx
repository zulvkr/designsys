import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { ReactComponent as GoogleIcon } from '@/assets/icons/google.svg'
import { ReactComponent as FacebookIcon } from '@/assets/icons/facebook.svg'
import { ReactComponent as AppleIcon } from '@/assets/icons/apple.svg'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Separator } from '../ui/separator'
import { Loader2 } from 'lucide-react'
import { createContext, useContext } from 'react'

const formSchema = z.object({
  email: z.string().email()
})

export const SignUpDialogContext = createContext<{
  open: boolean
  onOpenChange: (open: boolean) => void
}>({
  open: false,
  onOpenChange: () => {}
})

export function SignUpDialog({ children }: { children: React.ReactNode }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  const { isSubmitting } = form.formState

  async function onSubmit(data: z.infer<typeof formSchema>) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(data)
      }, 1000)
    })
  }

  const dialogContext = useContext(SignUpDialogContext)

  return (
    <Dialog {...dialogContext}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[450px] hidden sm:block'>
        <DialogHeader>
          <DialogTitle className='text-center text-base'>Login or sign up</DialogTitle>
        </DialogHeader>
        <DialogDescription className='mt-6 font-bold text-foreground text-xl'>
          Welcome to Housinn
        </DialogDescription>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='sr-only'>Email</FormLabel>
                    <FormControl>
                      <Input uiSize='sm' type='email' placeholder='Email' {...field} />
                    </FormControl>
                    <FormMessage />
                    <FormDescription className="sr-only">
                      This is your public display name.
                    </FormDescription>
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                className='flex w-full justify-center'
              >
                {isSubmitting ? <Loader2 className='animate-spin' /> : 'Submit'}
              </Button>
            </form>
          </Form>

          <div className='flex items-center gap-3 my-8'>
            <Separator className='flex-1' />
            <span className='text-muted-foreground -mt-1'>or</span>
            <Separator className='flex-1' />
          </div>

          <div className='space-y-3'>
            <Button size='sm' variant='outline' className='block w-full relative'>
              <span className='absolute left-3 top-1/2 transform -translate-y-1/2 opacity-80'>
                <GoogleIcon />
              </span>
              Continue with Google
            </Button>

            <Button size='sm' variant='outline' className='block w-full relative'>
              <span className='absolute left-3 top-1/2 transform -translate-y-1/2 opacity-80'>
                <AppleIcon />
              </span>
              Continue with Apple
            </Button>

            <Button size='sm' variant='outline' className='block w-full relative'>
              <span className='absolute left-3 top-1/2 transform -translate-y-1/2 opacity-80'>
                <FacebookIcon />
              </span>
              Continue with Facebook
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
