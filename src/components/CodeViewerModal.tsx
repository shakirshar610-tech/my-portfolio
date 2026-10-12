import React, { useState } from 'react';
import { X, Play, Copy, Check, Terminal, Code2, ArrowUpRight } from 'lucide-react';

interface CodeSnippet {
  id: string;
  name: string;
  language: 'C++' | 'Python';
  category: string;
  complexity: string;
  description: string;
  code: string;
  simulatedOutput: string;
}

const SNIPPETS: CodeSnippet[] = [
  {
    id: 'cpp-binary-search',
    name: 'binary_search.cpp',
    language: 'C++',
    category: 'Algorithms & Memory',
    complexity: 'Time: O(log N) · Space: O(1)',
    description: 'Iterative binary search with pointer boundary calculation preventing integer overflow.',
    code: `// Shakir Hussain - Aror University AI Department
// Topic: Algorithmic Search with Safe Midpoint Math

#include <iostream>
#include <vector>

int binarySearch(const std::vector<int>& arr, int target) {
    int left = 0;
    int right = static_cast<int>(arr.size()) - 1;

    while (left <= right) {
        // Safe midpoint calculation avoiding (left + right) integer overflow
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid; // Target index located
        }
        if (arr[mid] < target) {
            left = mid + 1; // Discard left half
        } else {
            right = mid - 1; // Discard right half
        }
    }
    return -1; // Element not present
}

int main() {
    std::vector<int> sortedData = {4, 12, 18, 25, 33, 47, 59, 82, 99};
    int query = 33;

    int resultIndex = binarySearch(sortedData, query);
    std::cout << "[SUCCESS] Target " << query << " found at index: " << resultIndex << std::endl;
    return 0;
}`,
    simulatedOutput: `[g++ compile] Compilation successful. Zero warnings.
Executing binary_search.out...
Input array size: 9 elements (sorted)
Search query: 33
[Iteration 1] mid = 4, val = 33 -> MATCH!
[SUCCESS] Target 33 found at index: 4
Process finished with exit code 0.`,
  },
  {
    id: 'cpp-matrix',
    name: 'matrix_multiplication.cpp',
    language: 'C++',
    category: 'Linear Algebra Fundamentals',
    complexity: 'Time: O(M * K * N) · Space: O(M * N)',
    description: 'Dynamic 2D matrix transformation vital for linear algebra and neural network weights.',
    code: `// Shakir Hussain - Matrix Transformation in C++
#include <iostream>
#include <vector>

using Matrix = std::vector<std::vector<double>>;

Matrix multiply(const Matrix& A, const Matrix& B) {
    size_t rowsA = A.size();
    size_t colsA = A[0].size();
    size_t colsB = B[0].size();

    // Initialize result matrix with zero weights
    Matrix result(rowsA, std::vector<double>(colsB, 0.0));

    for (size_t i = 0; i < rowsA; ++i) {
        for (size_t k = 0; k < colsA; ++k) {
            for (size_t j = 0; j < colsB; ++j) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
}

int main() {
    Matrix W = {{1.5, -0.5}, {0.8, 2.0}};
    Matrix X = {{2.0}, {4.0}};
    Matrix Y = multiply(W, X);
    std::cout << "Feedforward output vector: [" << Y[0][0] << ", " << Y[1][0] << "]" << std::endl;
    return 0;
}`,
    simulatedOutput: `[g++ compile] Matrix calculation pipeline executed.
Matrix W (2x2) * Vector X (2x1) computed.
Row 0: (1.5 * 2.0) + (-0.5 * 4.0) = 1.0
Row 1: (0.8 * 2.0) + (2.0 * 4.0) = 9.6
Feedforward output vector: [1.0, 9.6]
Completed in 0.04ms.`,
  },
  {
    id: 'py-gradient-descent',
    name: 'gradient_descent.py',
    language: 'Python',
    category: 'Machine Learning Math',
    complexity: 'Time: O(epochs * N) · Space: O(1)',
    description: 'Pure Python implementation of Mean Squared Error loss and single-step parameter update.',
    code: `"""
Shakir Hussain - Aror University BS AI
Core Machine Learning: Linear Regression Gradient Step
"""

def compute_mse_gradient(x_vals: list[float], y_vals: list[float], m: float, c: float):
    n = len(x_vals)
    dm = 0.0
    dc = 0.0
    
    # Calculate partial derivatives of MSE loss with respect to weight m and bias c
    for x, y in zip(x_vals, y_vals):
        prediction = (m * x) + c
        error = prediction - y
        dm += (2 / n) * error * x
        dc += (2 / n) * error
        
    return dm, dc

def train_step(x_vals, y_vals, m=0.0, c=0.0, lr=0.01, epochs=100):
    for epoch in range(1, epochs + 1):
        dm, dc = compute_mse_gradient(x_vals, y_vals, m, c)
        m -= lr * dm
        c -= lr * dc
        if epoch % 25 == 0:
            print(f"Epoch {epoch:03d} -> Weight: {m:.4f}, Bias: {c:.4f}")
    return m, c

# Simulated Pakistani agricultural dataset: [Nitrogen fertilizer] -> [Yield tons/acre]
features = [1.0, 2.0, 3.0, 4.0, 5.0]
targets = [2.2, 3.8, 5.9, 7.8, 10.1]
final_m, final_c = train_step(features, targets)
print(f"[CONVERGED] Optimal equation: y = {final_m:.2f}x + {final_c:.2f}")`,
    simulatedOutput: `Python 3.11 Environment initialized.
Training single-feature linear model on 5 data points...
Epoch 025 -> Weight: 1.6214, Bias: 0.4120
Epoch 050 -> Weight: 1.8340, Bias: 0.2215
Epoch 075 -> Weight: 1.9421, Bias: 0.1140
Epoch 100 -> Weight: 1.9840, Bias: 0.0520
[CONVERGED] Optimal equation: y = 1.98x + 0.05
MSE Loss decreased from 34.62 to 0.041. Model ready.`,
  },
  {
    id: 'py-data-cleaning',
    name: 'data_cleaner_pipeline.py',
    language: 'Python',
    category: 'Data Science & Preprocessing',
    complexity: 'Time: O(Rows) · Space: O(Rows)',
    description: 'Data transformation pipeline handling missing records, z-score normalization, and validation.',
    code: `"""
Shakir Hussain - Data Science Fundamentals
Pipeline: Clean, impute missing values, and normalize features
"""

def clean_and_normalize(records: list[dict], target_col: str):
    valid_values = [r[target_col] for r in records if r.get(target_col) is not None]
    
    # Calculate mean and standard deviation for imputation & scaling
    mean_val = sum(valid_values) / len(valid_values)
    variance = sum((x - mean_val) ** 2 for x in valid_values) / len(valid_values)
    std_dev = variance ** 0.5 or 1.0

    processed = []
    for row in records:
        val = row.get(target_col)
        # Impute missing values with mean
        if val is None:
            val = mean_val
        # Standardize using Z-Score formula: (x - mean) / std_dev
        z_score = (val - mean_val) / std_dev
        processed.append({**row, f"{target_col}_standardized": round(z_score, 4)})
        
    return processed, mean_val, std_dev

sample_data = [
    {"farmer_id": 101, "crop_yield": 45.0},
    {"farmer_id": 102, "crop_yield": None}, # Missing
    {"farmer_id": 103, "crop_yield": 52.0},
    {"farmer_id": 104, "crop_yield": 38.0},
]
cleaned, mu, sigma = clean_and_normalize(sample_data, "crop_yield")
print(f"Dataset cleansed. Imputed mean: {mu:.1f}, Standard deviation: {sigma:.2f}")`,
    simulatedOutput: `[Pipeline Log] Processing 4 records...
Detected 1 null value in column 'crop_yield'.
Calculated mean: 45.00 | Standard deviation: 5.72
Imputed missing record farmer_id 102 with 45.0.
Output standardized values:
  Farmer 101: z = 0.0000
  Farmer 102: z = 0.0000 (imputed)
  Farmer 103: z = 1.2238
  Farmer 104: z = -1.2238
Dataset cleansed. Imputed mean: 45.0, Standard deviation: 5.72`,
  },
];

interface CodeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLanguage?: 'C++' | 'Python';
}

export const CodeViewerModal: React.FC<CodeViewerModalProps> = ({
  isOpen,
  onClose,
  initialLanguage = 'C++',
}) => {
  const [activeSnippetId, setActiveSnippetId] = useState(
    initialLanguage === 'C++' ? 'cpp-binary-search' : 'py-gradient-descent'
  );
  const [isRunning, setIsRunning] = useState(false);
  const [showConsole, setShowConsole] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const activeSnippet = SNIPPETS.find((s) => s.id === activeSnippetId) || SNIPPETS[0];

  const handleRun = () => {
    setIsRunning(true);
    setShowConsole(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 450);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Topbar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <Code2 className="w-5 h-5 text-emerald-400" />
            <div>
              <div className="text-sm font-bold text-white">
                Interactive Code Inspector
              </div>
              <div className="text-[11px] text-slate-400">
                Authored by Shakir Hussain · Aror University AI
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Snippet Selector Tabs */}
        <div className="px-5 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center gap-2 overflow-x-auto">
          {SNIPPETS.map((snippet) => (
            <button
              key={snippet.id}
              onClick={() => {
                setActiveSnippetId(snippet.id);
                setShowConsole(false);
              }}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeSnippetId === snippet.id
                  ? 'bg-slate-800 text-emerald-400 border border-slate-700 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>{snippet.name}</span>
              <span className="text-[10px] text-slate-500">({snippet.language})</span>
            </button>
          ))}
        </div>

        {/* Snippet Context Bar */}
        <div className="px-5 py-2 bg-slate-950/60 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-slate-400">{activeSnippet.category}</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="font-mono text-emerald-400">{activeSnippet.complexity}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-2.5 py-1 text-xs text-slate-300 hover:text-white bg-slate-800 rounded border border-slate-700 flex items-center gap-1"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={handleRun}
              className="px-3 py-1 text-xs font-semibold bg-emerald-400 text-slate-950 hover:bg-emerald-300 rounded flex items-center gap-1.5 transition-colors"
            >
              <Play className="w-3 h-3 fill-slate-950" />
              <span>Run Code</span>
            </button>
          </div>
        </div>

        {/* Code Content Area */}
        <div className="flex-1 overflow-y-auto p-5 font-mono text-xs text-slate-200 bg-[#0B0F17] leading-relaxed">
          <pre className="whitespace-pre overflow-x-auto">
            {activeSnippet.code}
          </pre>
        </div>

        {/* Simulated Execution Console Drawer */}
        {showConsole && (
          <div className="border-t border-slate-800 bg-slate-950 p-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>Simulated Output Stream</span>
              </span>
              <button
                onClick={() => setShowConsole(false)}
                className="text-slate-500 hover:text-white"
              >
                Hide Console
              </button>
            </div>
            {isRunning ? (
              <div className="text-slate-400 py-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Compiling and executing code...</span>
              </div>
            ) : (
              <pre className="text-emerald-300/90 whitespace-pre overflow-x-auto leading-relaxed">
                {activeSnippet.simulatedOutput}
              </pre>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
