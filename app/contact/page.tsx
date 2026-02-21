"use client"

import { useState } from "react"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // 入力変更処理
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // 簡易バリデーション
  const validate = () => {
    const newErrors: { [key: string]: string } = {}

    if (!form.name) newErrors.name = "お名前は必須です"
    if (!form.email) newErrors.email = "メールは必須です"
    if (!form.message) newErrors.message = "お問い合わせ内容は必須です"

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (form.email && !emailRegex.test(form.email)) {
      newErrors.email = "メール形式が正しくありません"
    }

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)

    // 今はダミー送信
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">
          送信ありがとうございました
        </h2>
        <p>内容を確認のうえご連絡いたします。</p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
        お問い合わせ
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 名前 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">お名前 *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* 会社名 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">会社名</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* メール */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">メールアドレス *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* 電話番号 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">電話番号</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* 内容 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            お問い合わせ内容 *
          </label>
         <textarea
  name="message"
  value={form.message}
  onChange={handleChange}
  className="w-full border border-gray-300 rounded-md px-4 py-2 h-40 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
/>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* ボタン */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition font-semibold"
        >
          {loading ? "送信中..." : "送信する"}
        </button>
      </form>
    </div>
  )
}