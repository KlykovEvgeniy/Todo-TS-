interface ContainerProps {
    children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
    return (
        <div className="max-w-[600px] m-auto p-5 text-center">
            {children}
        </div>
    )
}