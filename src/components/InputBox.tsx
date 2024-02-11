import { useId } from "react";

interface InputBoxProps {
  label: string;
  amount: number;
  className?: string;
  onAmountChange: (value: number) => void;
  onCurrencyChange: (value: string) => void;
  currencyOptions: string[];
  selectedCurrency: string;
  amountDisable?: boolean;
  currencyDisable?: boolean;
}

const InputBox = (props: InputBoxProps) => {
  const amountInputId = useId();

  const {
    label,
    amount,
    className,
    onAmountChange,
    onCurrencyChange,
    currencyOptions,
    selectedCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
  } = props;
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(event) =>
            onAmountChange && onAmountChange(Number(event.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          value={selectedCurrency}
          onChange={(event) => onCurrencyChange(event?.target.value)}
          disabled={currencyDisable}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value="usd">
              usd
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
