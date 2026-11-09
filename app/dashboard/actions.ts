import { createClient } from '@/app/lib/supabase/server'
import { cookies } from 'next/headers'

export  async function getTodosAction() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()
  console.log(todos,'todossssss');

  return todos
  

}

export  async function getCustomersAction() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: customers } = await supabase.from('customers').select()
  console.log(customers,'todossssss');

  return customers
  

}