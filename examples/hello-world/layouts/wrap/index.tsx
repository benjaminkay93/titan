import React from 'react'

interface WrapType {
  children: React.ReactNode
}

const Wrap = ({ children }: WrapType) => <>{children}</>

export default Wrap
