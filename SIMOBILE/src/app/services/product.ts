import { Service, signal } from '@angular/core';

export interface Product {
  id: number;
  nama: string;
  hargaBeli: number;
  hargaJual: number;
  stok: number;
  tipe: string;
  url: string;
}

@Service()
export class ProductService {
   products: Product[] = [
        {
            id: 1,
            nama: "Momogi",
            hargaBeli: 1000,
            hargaJual: 1500,
            stok: 120,
            tipe: "Snack",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mDsDqvfRlHaBFTXIEpDhkrgtmlNAn_drmkV23dc9pg&s=10"
        },
        {
            id: 2,
            nama: "Oreo",
            hargaBeli: 7000,
            hargaJual: 9000,
            stok: 96,
            tipe: "Snack",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVNcbe6KqlkLWQn5h_9gRoHMYIgI_UVr8ZO6I_YFQUg&s=10"
        },
        {
            id: 3,
            nama: "Indomie",
            hargaBeli: 2800,
            hargaJual: 3500,
            stok: 80,
            tipe: "Makanan",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMuQlO1L1M70aIKcEG7Ppd69QdZooXKo-OUgbEDURpQ&s=10"
        },
        {
            id: 4,
            nama: "Aqua",
            hargaBeli: 3000,
            hargaJual: 4000,
            stok: 96,
            tipe: "Minuman",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGntsQ_O8tKmJG34XLKgfLFrBuUn-_A2oXU3Fps0_Dg&s=10"
        },
        {
            id: 5,
            nama: "Teh Pucuk",
            hargaBeli: 3500,
            hargaJual: 4500,
            stok: 48,
            tipe: "Minuman",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRHmLmSDV6iBAuZcHOFcN8zjCyAYkSt27SChIf5R-sg&s=10"
        },
        {
            id: 6,
            nama: "Beng-beng",
            hargaBeli: 2000,
            hargaJual: 2500,
            stok: 68,
            tipe: "Snack",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdijzfstwhLdox9MnEEa0or147MWwSgBKC7qcKzJ_Rg&s=10"
        },
        {
            id: 7,
            nama: "Gula 1kg",
            hargaBeli: 17500,
            hargaJual: 20000,
            stok: 48,
            tipe: "Bahan Pokok",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3mc5Gz0RdYWufMNGzLIGMtSkvXA2vP7pi9Ot_gmIZA&s=10"
        },
        {
            id: 8,
            nama: "Minyak 1L",
            hargaBeli: 21000,
            hargaJual: 24000,
            stok: 48,
            tipe: "Bahan Pokok",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZl-SYfyXwD06K--Xj3cskPgF8qflLrVYqLWFsFEvUvA&s=10"
        },
        {
            id: 9,
            nama: "Susu 1L",
            hargaBeli: 15000,
            hargaJual: 18000,
            stok: 48,
            tipe: "Minuman",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2G5XYlPxPq5QjeuWg5yHkfrRyekrWLNaggavwjqSMg&s=10"
        },
        {
            id: 10,
            nama: "Tisu",
            hargaBeli: 5000,
            hargaJual: 7000,
            stok: 72,
            tipe: "Kebutuhan Rumah",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQa6iSHpzETVl3Gs2o_QpIyaVxSJVs2Ho9RIqAwgf_A&s=10"
        },
        {
            id: 11,
            nama: "Sabun Batang",
            hargaBeli: 4000,
            hargaJual: 5000,
            stok: 72,
            tipe: "Kebutuhan Rumah",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpNWwD5PkGlbb2yu1UA4BNl8874pFdeGgnqczzJYE_g&s=10"
        },
        {
            id: 12,
            nama: "Sampo Sachet",
            hargaBeli: 2000,
            hargaJual: 2500,
            stok: 72,
            tipe: "Kebutuhan Rumah",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTof3d81vraoQSFdQI_TKA3HY2zi3Zl1j3yB3Ru2aZOiw&s=10"
        }
    ];
    private nextId = this.products.length + 1;

    getProducts(): Product[] {
        return this.products;
    }

    getProductById(id: number): Product | undefined {
        return this.products.find(p => p.id === id);
    }

    addProduct(n_nama: string, n_hargaBeli: number, n_hargaJual: number, n_stok: number, n_tipe: string, n_url: string) {
        this.products.push({
            id: this.nextId++,
            nama: n_nama,
            hargaBeli: n_hargaBeli,
            hargaJual: n_hargaJual,
            stok: n_stok,
            tipe: n_tipe,
            url: n_url
        })
    }


    saveProduct(id: number, n_nama: string, n_hargaBeli: number, n_hargaJual: number, n_stok: number, n_tipe: string, n_url: string): void {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = {
        id: id,
        nama: n_nama,
        hargaBeli: n_hargaBeli,
        hargaJual: n_hargaJual,
        stok: n_stok,
        tipe: n_tipe,
        url: n_url
      };
    }
  }

  deleteProduct(id: number): void {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
  
