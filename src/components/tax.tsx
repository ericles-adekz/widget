interface Props {
  tax: string
}
export default function Tax({ tax }: Props) {
  return (
    <div className="w-full flex justify-center items-center bg-green-500 rounded-lg p-4 text-slate-900">
      <h2 className="inline-flex text-center text-4xl font-bold mx-auto pr-4">
        {tax}%
      </h2>
      <p className="inline-flex text-lg font-semibold leading-5">
        É a melhor taxa que conseguimos
      </p>
    </div>
  )
}
