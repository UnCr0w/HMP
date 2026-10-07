import { getLocaleMonthNames } from '@angular/common';
import { Service } from '@angular/core';

@Service()
export class Transaction {

    lstDay: string[] = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    lstMonth: string[] = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    history = [
        {
            id: 1,
            tanggal: new Date("2026-10-01T08:15:00"),
            items: [
                {
                    id: 1,
                    nama: "Momogi",
                    hargaJual: 1500,
                    stok: 120,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mDsDqvfRlHaBFTXIEpDhkrgtmlNAn_drmkV23dc9pg&s=10",
                    qty: 3
                },
                {
                    id: 2,
                    nama: "Oreo",
                    hargaJual: 9000,
                    stok: 96,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVNcbe6KqlkLWQn5h_9gRoHMYIgI_UVr8ZO6I_YFQUg&s=10",
                    qty: 2
                },
                {
                    id: 4,
                    nama: "Aqua",
                    hargaJual: 4000,
                    stok: 96,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGntsQ_O8tKmJG34XLKgfLFrBuUn-_A2oXU3Fps0_Dg&s=10",
                    qty: 2
                }
            ],
            totalHarga: 25500
        },

        {
            id: 2,
            tanggal: new Date("2026-10-01T10:30:00"),
            items: [
                {
                    id: 3,
                    nama: "Indomie",
                    hargaJual: 3500,
                    stok: 80,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMuQlO1L1M70aIKcEG7Ppd69QdZooXKo-OUgbEDURpQ&s=10",
                    qty: 5
                },
                {
                    id: 5,
                    nama: "Teh Pucuk",
                    hargaJual: 4500,
                    stok: 48,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRHmLmSDV6iBAuZcHOFcN8zjCyAYkSt27SChIf5R-sg&s=10",
                    qty: 3
                },
                {
                    id: 6,
                    nama: "Beng-beng",
                    hargaJual: 2500,
                    stok: 68,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdijzfstwhLdox9MnEEa0or147MWwSgBKC7qcKzJ_Rg&s=10",
                    qty: 2
                }
            ],
            totalHarga: 32500
        },

        {
            id: 3,
            tanggal: new Date("2026-10-02T09:20:00"),
            items: [
                {
                    id: 7,
                    nama: "Gula 1kg",
                    hargaJual: 20000,
                    stok: 48,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3mc5Gz0RdYWufMNGzLIGMtSkvXA2vP7pi9Ot_gmIZA&s=10",
                    qty: 2
                },
                {
                    id: 8,
                    nama: "Minyak 1L",
                    hargaJual: 24000,
                    stok: 48,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZl-SYfyXwD06K--Xj3cskPgF8qflLrVYqLWFsFEvUvA&s=10",
                    qty: 1
                }
            ],
            totalHarga: 64000
        },

        {
            id: 4,
            tanggal: new Date("2026-10-02T14:45:00"),
            items: [
                {
                    id: 9,
                    nama: "Susu 1L",
                    hargaJual: 18000,
                    stok: 48,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2G5XYlPxPq5QjeuWg5yHkfrRyekrWLNaggavwjqSMg&s=10",
                    qty: 2
                },
                {
                    id: 10,
                    nama: "Tisu",
                    hargaJual: 7000,
                    stok: 72,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQa6iSHpzETVl3Gs2o_QpIyaVxSJVs2Ho9RIqAwgf_A&s=10",
                    qty: 3
                },
                {
                    id: 11,
                    nama: "Sabun Batang",
                    hargaJual: 5000,
                    stok: 72,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpNWwD5PkGlbb2yu1UA4BNl8874pFdeGgnqczzJYE_g&s=10",
                    qty: 2
                }
            ],
            totalHarga: 71000
        },

        {
            id: 5,
            tanggal: new Date("2026-10-03T11:10:00"),
            items: [
                {
                    id: 1,
                    nama: "Momogi",
                    hargaJual: 1500,
                    stok: 120,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mDsDqvfRlHaBFTXIEpDhkrgtmlNAn_drmkV23dc9pg&s=10",
                    qty: 5
                },
                {
                    id: 3,
                    nama: "Indomie",
                    hargaJual: 3500,
                    stok: 80,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMuQlO1L1M70aIKcEG7Ppd69QdZooXKo-OUgbEDURpQ&s=10",
                    qty: 4
                },
                {
                    id: 12,
                    nama: "Sampo Sachet",
                    hargaJual: 2500,
                    stok: 72,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTof3d81vraoQSFdQI_TKA3HY2zi3Zl1j3yB3Ru2aZOiw&s=10",
                    qty: 3
                }
            ],
            totalHarga: 29000
        },

        {
            id: 6,
            tanggal: new Date("2026-10-03T16:30:00"),
            items: [
                {
                    id: 2,
                    nama: "Oreo",
                    hargaJual: 9000,
                    stok: 96,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVNcbe6KqlkLWQn5h_9gRoHMYIgI_UVr8ZO6I_YFQUg&s=10",
                    qty: 3
                },
                {
                    id: 4,
                    nama: "Aqua",
                    hargaJual: 4000,
                    stok: 96,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGntsQ_O8tKmJG34XLKgfLFrBuUn-_A2oXU3Fps0_Dg&s=10",
                    qty: 4
                },
                {
                    id: 5,
                    nama: "Teh Pucuk",
                    hargaJual: 4500,
                    stok: 48,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRHmLmSDV6iBAuZcHOFcN8zjCyAYkSt27SChIf5R-sg&s=10",
                    qty: 2
                }
            ],
            totalHarga: 53000
        },

        {
            id: 7,
            tanggal: new Date("2026-10-04T09:00:00"),
            items: [
                {
                    id: 7,
                    nama: "Gula 1kg",
                    hargaJual: 20000,
                    stok: 48,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3mc5Gz0RdYWufMNGzLIGMtSkvXA2vP7pi9Ot_gmIZA&s=10",
                    qty: 1
                },
                {
                    id: 8,
                    nama: "Minyak 1L",
                    hargaJual: 24000,
                    stok: 48,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZl-SYfyXwD06K--Xj3cskPgF8qflLrVYqLWFsFEvUvA&s=10",
                    qty: 2
                },
                {
                    id: 10,
                    nama: "Tisu",
                    hargaJual: 7000,
                    stok: 72,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQa6iSHpzETVl3Gs2o_QpIyaVxSJVs2Ho9RIqAwgf_A&s=10",
                    qty: 2
                }
            ],
            totalHarga: 82000
        },

        {
            id: 8,
            tanggal: new Date("2026-10-04T13:25:00"),
            items: [
                {
                    id: 6,
                    nama: "Beng-beng",
                    hargaJual: 2500,
                    stok: 68,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdijzfstwhLdox9MnEEa0or147MWwSgBKC7qcKzJ_Rg&s=10",
                    qty: 4
                },
                {
                    id: 11,
                    nama: "Sabun Batang",
                    hargaJual: 5000,
                    stok: 72,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpNWwD5PkGlbb2yu1UA4BNl8874pFdeGgnqczzJYE_g&s=10",
                    qty: 3
                },
                {
                    id: 12,
                    nama: "Sampo Sachet",
                    hargaJual: 2500,
                    stok: 72,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTof3d81vraoQSFdQI_TKA3HY2zi3Zl1j3yB3Ru2aZOiw&s=10",
                    qty: 2
                }
            ],
            totalHarga: 24500
        },

        {
            id: 9,
            tanggal: new Date("2026-10-05T10:40:00"),
            items: [
                {
                    id: 3,
                    nama: "Indomie",
                    hargaJual: 3500,
                    stok: 80,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMuQlO1L1M70aIKcEG7Ppd69QdZooXKo-OUgbEDURpQ&s=10",
                    qty: 10
                },
                {
                    id: 4,
                    nama: "Aqua",
                    hargaJual: 4000,
                    stok: 96,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGntsQ_O8tKmJG34XLKgfLFrBuUn-_A2oXU3Fps0_Dg&s=10",
                    qty: 6
                }
            ],
            totalHarga: 59000
        },

        {
            id: 10,
            tanggal: new Date("2026-10-05T15:15:00"),
            items: [
                {
                    id: 2,
                    nama: "Oreo",
                    hargaJual: 9000,
                    stok: 96,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVNcbe6KqlkLWQn5h_9gRoHMYIgI_UVr8ZO6I_YFQUg&s=10",
                    qty: 2
                },
                {
                    id: 5,
                    nama: "Teh Pucuk",
                    hargaJual: 4500,
                    stok: 48,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRHmLmSDV6iBAuZcHOFcN8zjCyAYkSt27SChIf5R-sg&s=10",
                    qty: 4
                },
                {
                    id: 9,
                    nama: "Susu 1L",
                    hargaJual: 18000,
                    stok: 48,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2G5XYlPxPq5QjeuWg5yHkfrRyekrWLNaggavwjqSMg&s=10",
                    qty: 1
                },
                {
                    id: 10,
                    nama: "Tisu",
                    hargaJual: 7000,
                    stok: 72,
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQa6iSHpzETVl3Gs2o_QpIyaVxSJVs2Ho9RIqAwgf_A&s=10",
                    qty: 1
                }
            ],
            totalHarga: 61000
        }
    ];
    //history: any[] = [];
    dates: any[] = [
        {
            year: 2026,
            month: 10,
            date: 5,
            day: 1
        },
        {
            year: 2026,
            month: 10,
            date: 4,
            day: 0
        },
        {
            year: 2026,
            month: 10,
            date: 3,
            day: 6
        },
        {
            year: 2026,
            month: 10,
            date: 2,
            day: 5
        },
        {
            year: 2026,
            month: 10,
            date: 1,
            day: 4,
        },
    ]

    addTransaction(cartItems: any[], finalTotal: number) {
        let newReceipt = {
            id: this.history.length + 1,
            tanggal: new Date(),
            items: cartItems,
            totalHarga: finalTotal
        };

        this.addToDate(new Date());
        this.history.push(newReceipt);
    }

    addToDate(tgl: Date) {
        var id: number = this.dates.length - 1;
        var lastDate = this.dates[id].day + "-" +
            this.dates[id].date + "-" +
            this.dates[id].month + "-" +
            this.dates[id].year;

        var h = tgl.getDay();
        var d = tgl.getDate();
        var m = tgl.getMonth() + 1;
        var y = tgl.getFullYear();
        var newDate = h + '-' + d + ' ' + m + '-' + y;

        if (this.dates[id] != newDate) {
            this.dates.unshift({
                year: y,
                month: m,
                date: d,
                day: h
            });
        }
    }

    getHistory() {
        return this.history;
    }

    filterRiwayat(date: any): any[] {
        var temp_riwayat: any[] = [];
        for (let i = 0; i < this.history.length; i++) {
            if (this.formatInd(date) == this.dateFormatInd(this.history[i].tanggal)) {
                temp_riwayat.unshift(this.history[i]);
            }
        }
        return temp_riwayat;
    }

    todayInd(): string {
        var currentDate = new Date()
        const h = currentDate.getDay();
        const d = currentDate.getDate();
        const m = currentDate.getMonth();
        const y = currentDate.getFullYear();
        return this.lstDay[h] + ', ' + d + ' ' + this.lstMonth[m] + ' ' + y;
    }

    dateFormatInd(date: Date): string {
        const h = date.getDay();
        const d = date.getDate();
        const m = date.getMonth();
        const y = date.getFullYear();
        return this.lstDay[h] + ', ' + d + ' ' + this.lstMonth[m] + ' ' + y;
    }

    formatInd(date: any) {
        const h = date.day;
        const d = date.date;
        const m = date.month;
        const y = date.year;
        return this.lstDay[h] + ', ' + d + ' ' + this.lstMonth[m - 1] + ' ' + y;
    }

}