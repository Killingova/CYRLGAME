import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { supabase } from '../supabaseClient'

const AuthCallback = () => {
  const navigate = useNavigate()
  const { search, hash } = useLocation()

  useEffect(() => {
    const url = search || hash
    supabase.auth.exchangeCodeForSession(url).catch(console.error)
    navigate('/', { replace: true })
  }, [search, hash, navigate])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <span className="animate-spin h-10 w-10 border-4 border-[#8C5A67] rounded-full border-t-transparent" />
    </div>
  )
}

export default AuthCallback