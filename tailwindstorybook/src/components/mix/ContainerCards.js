import React from 'react'

const ContainerCards =  ({ children, className}) => (
    <h1 className={`flex flex-col sm:flex-row sm:-mx-3 mt-12 text-center ${className}`}
    >
        {children}
    </h1>
)

export default ContainerCards