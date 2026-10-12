import React, { useState } from 'react';
import { BookOpen, Plus, Trash2, ArrowUpRight, ArrowDownLeft, RotateCcw, Search, DollarSign } from 'lucide-react';

interface Transaction {
  id: string;
  customerName: string;
  type: 'credit' | 'debit'; // credit = udhaar (receivable), debit = wasooli (received)
  amount: number;
  date: string;
  note: string;
}

const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx-1',
    customerName: 'Ali Raza (Karyana Store)',
    type: 'credit',
    amount: 14500,
    date: '2026-10-10',
    note: '5 bags flour & cooking oil crates',
  },
  {
    id: 'tx-2',
    customerName: 'Bismillah Autos Sukkur',
    type: 'debit',
    amount: 9000,
    date: '2026-10-11',
    note: 'Partial cash payment via JazzCash',
  },
  {
    id: 'tx-3',
    customerName: 'Tariq Mehmood Farmer',
    type: 'credit',
    amount: 22000,
    date: '2026-10-12',
    note: 'Fertilizer DAP sack advance',
  },
  {
    id: 'tx-4',
    customerName: 'Ali Raza (Karyana Store)',
    type: 'debit',
    amount: 5000,
    date: '2026-10-12',
    note: 'Weekly installment cleared',
  },
];

export const DigitalKhataSimulator: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);
  const [filter, setFilter] = useState<'all' | 'credit' | 'debit'>('all');
  const [search, setSearch] = useState('');

  // Form states
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'credit' | 'debit'>('credit');
  const [note, setNote] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  // Compute ledger metrics
  const totalCredit = transactions
    .filter((t) => t.type === 'credit')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalDebit = transactions
    .filter((t) => t.type === 'debit')
    .reduce((sum, t) => sum + t.amount, 0);

  const netReceivable = totalCredit - totalDebit;

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);
    if (!name.trim() || isNaN(parsedAmount) || parsedAmount <= 0) return;

    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      customerName: name.trim(),
      type,
      amount: parsedAmount,
      date: new Date().toISOString().split('T')[0],
      note: note.trim() || 'General ledger entry',
    };

    setTransactions([newTx, ...transactions]);
    setName('');
    setAmount('');
    setNote('');
    setShowAddForm(false);
  };

  const handleDelete = (id: string) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const handleReset = () => {
    setTransactions(INITIAL_TRANSACTIONS);
  };

  const filtered = transactions.filter((t) => {
    const matchesFilter = filter === 'all' || t.type === filter;
    const matchesSearch =
      t.customerName.toLowerCase().includes(search.toLowerCase()) ||
      t.note.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
      {/* Header bar */}
      <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-white">
              Digital Khata Interactive Ledger
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Real-time business bookkeeping engine for Pakistani retailers and merchants
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-3 py-1.5 text-xs font-semibold bg-emerald-400 text-slate-950 hover:bg-emerald-300 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Entry</span>
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 text-xs text-slate-400 hover:text-white bg-slate-800/80 rounded-lg border border-slate-700"
            title="Reset sample records"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-[11px] font-medium text-slate-400">Total Udhaar (Receivable)</div>
            <div className="text-lg font-bold text-rose-400 font-mono tabular-nums">
              Rs. {totalCredit.toLocaleString()}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-[11px] font-medium text-slate-400">Total Wasooli (Received)</div>
            <div className="text-lg font-bold text-emerald-400 font-mono tabular-nums">
              Rs. {totalDebit.toLocaleString()}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-[11px] font-medium text-slate-400">Net Outstanding Balance</div>
            <div className="text-lg font-bold text-white font-mono tabular-nums">
              Rs. {netReceivable.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Add Entry Form Modal / Dropdown */}
        {showAddForm && (
          <form onSubmit={handleAdd} className="p-4 rounded-xl bg-slate-950 border border-slate-700 space-y-3">
            <div className="text-xs font-semibold text-white">Record New Khata Transaction</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="Customer / Merchant Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
              />
              <input
                type="number"
                placeholder="Amount (PKR)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                min="1"
                className="px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 font-mono"
              />
              <select
                value={type}
                onChange={(e) => setType(e.target.value as 'credit' | 'debit')}
                className="px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-400"
              >
                <option value="credit">Udhaar (Gave Credit / Item)</option>
                <option value="debit">Wasooli (Received Payment)</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Transaction note (e.g., Grocery invoice #104, bank transfer)"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="flex-1 px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
              />
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold bg-emerald-400 text-slate-950 rounded-lg hover:bg-emerald-300 transition-colors"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-3 py-2 text-xs text-slate-400 hover:text-white"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Filter & Search Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-md transition-colors ${
                filter === 'all' ? 'bg-slate-800 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Records
            </button>
            <button
              onClick={() => setFilter('credit')}
              className={`px-3 py-1 rounded-md transition-colors ${
                filter === 'credit' ? 'bg-rose-500/20 text-rose-300 font-medium' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Udhaar Only
            </button>
            <button
              onClick={() => setFilter('debit')}
              className={`px-3 py-1 rounded-md transition-colors ${
                filter === 'debit' ? 'bg-emerald-500/20 text-emerald-300 font-medium' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Wasooli Only
            </button>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search customer or note..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-700 w-48 sm:w-60"
            />
          </div>
        </div>

        {/* Transaction Table / List */}
        <div className="rounded-xl border border-slate-800 overflow-hidden">
          <div className="divide-y divide-slate-800/80 bg-slate-950">
            {filtered.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-500">
                No matching transactions found in ledger.
              </div>
            ) : (
              filtered.map((t) => (
                <div key={t.id} className="p-3.5 sm:px-4 flex items-center justify-between gap-4 hover:bg-slate-900/50 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      t.type === 'credit' ? 'bg-rose-500/10 text-rose-400' : 'bg-emerald-500/10 text-emerald-400'
                    }`}>
                      {t.type === 'credit' ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownLeft className="w-4 h-4" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-white truncate">
                        {t.customerName}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate">
                        {t.note} · <span className="font-mono">{t.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right">
                      <div className={`text-xs font-bold font-mono tabular-nums ${
                        t.type === 'credit' ? 'text-rose-400' : 'text-emerald-400'
                      }`}>
                        {t.type === 'credit' ? '+Rs. ' : '-Rs. '}
                        {t.amount.toLocaleString()}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        {t.type === 'credit' ? 'Udhaar' : 'Wasooli'}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="p-1.5 text-slate-600 hover:text-rose-400 transition-colors"
                      title="Delete entry"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
