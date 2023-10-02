

export default function DesignCard({card, className, onClick}) {
  return (
    <div onClick={onClick} className={className}>{card}</div>
  )
}

 