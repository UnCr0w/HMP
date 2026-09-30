import { Service } from '@angular/core';

@Service()
export class Product {
    products = [
        {
            nama: "Momogi",
            harga: 1500,
            stok: 120,
            tipe: "Snack",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mDsDqvfRlHaBFTXIEpDhkrgtmlNAn_drmkV23dc9pg&s=10"
        },
        {
            nama: "Oreo",
            harga: 9000,
            stok: 96,
            tipe: "Snack",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVNcbe6KqlkLWQn5h_9gRoHMYIgI_UVr8ZO6I_YFQUg&s=10"
        },
        {
            nama: "Indomie",
            harga: 3500,
            stok: 80,
            tipe: "Makanan",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMuQlO1L1M70aIKcEG7Ppd69QdZooXKo-OUgbEDURpQ&s=10",
        },
        {
            nama: "Aqua",
            harga: 4000,
            stok: 96,
            tipe: "Minuman",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGntsQ_O8tKmJG34XLKgfLFrBuUn-_A2oXU3Fps0_Dg&s=10",
        },
        {
            nama: "Teh Pucuk",
            harga: 4500,
            stok: 48,
            tipe: "Minuman",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRHmLmSDV6iBAuZcHOFcN8zjCyAYkSt27SChIf5R-sg&s=10",
        },
        {
            nama: "Beng-beng",
            harga: 2500,
            stok: 68,
            tipe: "Snack",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdijzfstwhLdox9MnEEa0or147MWwSgBKC7qcKzJ_Rg&s=10",
        },
        {
            nama: "Gula 1kg",
            harga: 20000,
            stok: 48,
            tipe: "Bahan Pokok",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3mc5Gz0RdYWufMNGzLIGMtSkvXA2vP7pi9Ot_gmIZA&s=10",
        },
        {
            nama: "Minyak 1L",
            harga: 24000,
            stok: 48,
            tipe: "Bahan Pokok",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZl-SYfyXwD06K--Xj3cskPgF8qflLrVYqLWFsFEvUvA&s=10",
        },
        {
            nama: "Susu 1L",
            harga: 18000,
            stok: 48,
            tipe: "Minuman",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2G5XYlPxPq5QjeuWg5yHkfrRyekrWLNaggavwjqSMg&s=10",
        },
        {
            nama: "Tisu",
            harga: 7000,
            stok: 72,
            tipe: "Kebutuhan Rumah",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQa6iSHpzETVl3Gs2o_QpIyaVxSJVs2Ho9RIqAwgf_A&s=10",
        },
        {
            nama: "Sabun Batang",
            harga: 5000,
            stok: 72,
            tipe: "Kebutuhan Rumah",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpNWwD5PkGlbb2yu1UA4BNl8874pFdeGgnqczzJYE_g&s=10",
        },
        {
            nama: "Sampo Sachet",
            harga: 2500,
            stok: 72,
            tipe: "Kebutuhan Rumah",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTof3d81vraoQSFdQI_TKA3HY2zi3Zl1j3yB3Ru2aZOiw&s=10",
        },

    ]

    temp_products: any[] = this.products;
    arr_tipe: string[] = ["Snack", "Makanan", "Minuman", "Bahan Pokok", "Kebutuhan Rumah"];

    saveProduct(id: number, n_nama: string, n_harga: number, n_stok: number, n_tipe: string, n_url: string) {
        this.products[id].nama = n_nama;
        this.products[id].harga = n_harga;
        this.products[id].stok = n_stok;
        this.products[id].tipe = n_tipe;
        this.products[id].url = n_url;
    }

    addProduct(n_nama: string, n_harga: number, n_stok: number, n_tipe: string, n_url: string) {
        this.products.push({
            nama: n_nama,
            harga: n_harga,
            stok: n_stok,
            tipe: n_tipe,
            url: n_url
        })
    }

    deleteProduct(id: number) {

    }

    setBadge(type: string): string {
        if (type == "Snack") {
            return "warning";
        } else if (type == "Makanan") {
            return "danger";
        } else if (type == "Bahan Pokok") {
            return "tertiary";
        } else if (type == "Kebutuhan Rumah") {
            return "success"
        } else if (type = "Minuman") {
            return "primary";
        }
        return "";
    }

    filterProduct(keyword: string, category: string): any[] {
        this.temp_products = [];
        if (keyword.trim() == "" && category == "Semua") {
            this.temp_products = this.products;
        } else {
            for (let i = 0; i < this.products.length; i++) {
                if ((this.products[i].nama.toLowerCase()).includes(keyword.trim().toLowerCase())) {
                    if (category == "Semua" || category == this.products[i].tipe) {
                        this.temp_products.push(this.products[i]);
                    }
                }
            }
        }

        return this.temp_products;

    }
}
