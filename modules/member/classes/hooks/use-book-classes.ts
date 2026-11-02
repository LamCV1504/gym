import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useBookClass() {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: async (classId: string) => {
      await new Promise(r => setTimeout(r, 500))
      return true
    },

    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["classes"] })
    },
  })
}