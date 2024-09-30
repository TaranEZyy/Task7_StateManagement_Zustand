import { create } from 'zustand'; // Named import

const useStore = create((set)=>({
    count:0,
    increment: ()=>set((state)=>({count:state.count+1})),

    decrement: () => set((state) => {
        if (state.count === 0) {
          return { count: 0 }; // Ensure count doesn't go below 0
        } else {
          return { count: state.count - 1 }; 
        }
      }),
      
    reset: () => set(() => ({ count: 0 })),
}));

export default useStore;