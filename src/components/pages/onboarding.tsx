import { SignUpDialog } from '../onboarding/SignupDialog'
import { Button } from '../ui/button'
import { Loader2, X } from 'lucide-react'
import { Input } from '../ui/input'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Separator } from '../ui/separator'
import { ReactComponent as GoogleIcon } from '@/assets/icons/google.svg'
import { ReactComponent as FacebookIcon } from '@/assets/icons/facebook.svg'
import { ReactComponent as AppleIcon } from '@/assets/icons/apple.svg'

const formSchema = z.object({
  email: z.string().email()
})

export default function OnboardingPageReact() {
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

  return (
    <>
      <div className='container mx-auto hidden sm:block'>
        <nav className='flex h-16 items-center'>
          <div className='ml-auto'>
            <SignUpDialog>
              <Button size='xs'>Sign up</Button>
            </SignUpDialog>
          </div>
        </nav>
      </div>
      <div className='min-h-[100svh] sm:hidden'>
        <div>
          <Button variant='ghost' size='icon'>
            <X />
          </Button>
        </div>
        <div className='px-4'>
          <h2 className='text-xl mt-4 mb-4 font-bold'>
            Login or sign up to Housinn
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type='email' placeholder='' {...field} />
                    </FormControl>
                    <FormMessage />
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                size='lg'
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
            <Button variant='outline' className='block w-full relative'>
              <span className='absolute left-3 top-1/2 transform -translate-y-1/2 opacity-80'>
                <GoogleIcon />
              </span>
              Continue with Google
            </Button>

            <Button variant='outline' className='block w-full relative'>
              <span className='absolute left-3 top-1/2 transform -translate-y-1/2 opacity-80'>
                <AppleIcon />
              </span>
              Continue with Apple
            </Button>

            <Button variant='outline' className='block w-full relative'>
              <span className='absolute left-3 top-1/2 transform -translate-y-1/2 opacity-80'>
                <FacebookIcon />
              </span>
              Continue with Facebook
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
