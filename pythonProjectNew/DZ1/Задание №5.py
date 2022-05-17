hours, min, sek, hours_2, min_2, sek_2 = map(int, input().split())
hours_sek = hours * 3600
min_sek = min * 60
total_sek = hours_sek + min_sek + sek
hours_sek_2 = hours_2 * 3600
min_sek_2 = min_2 * 60
total_sek_2 = hours_sek_2 + min_sek_2 + sek_2
print(total_sek_2 - total_sek)
