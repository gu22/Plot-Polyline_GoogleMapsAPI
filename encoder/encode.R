openfile <- file.choose()
library(readxl)
library(googlePolylines)

#latlong <- read_excel('~/R - Programaçao/Maps/latlong.xlsx',col_names = TRUE)
latlong <- read_excel(openfile,col_names = TRUE)
#latlong[1] <- NULL
#latlong[7] <- NULL

lat <- c((latlong[3]))
long <- c((latlong[4]))



la <- unlist(lat,use.names = FALSE)
lo <- unlist(long,use.names = FALSE)

la <- as.numeric(rev(la))
lo <- as.numeric(rev(lo))

cod <- encodeCoordinates(as.numeric(lo),as.numeric(la))
cod
decode(cod)


count = length(la)

if (length(lo)==length(la))

nome_arq <- readline(prompt = 'Entre como o nome arq')  
    
for (i in la){
  #n = 1
  test <- cat(lo[i], ',',la[i],'; ')
  test <- (paste(lo[i], la[i],sep = ","))
  write((paste(lo[i], la[i],sep = ",")),file = (paste(nome_arq,'longlatN.txt', sep = " ")),sep = ";")
  write((paste(la[i], lo[i],sep = ",")),file = (paste(nome_arq,'latlongN.txt', sep = " ")),sep = ";")
  #n = 1+n
  
}

#write.table()

write(test,file = 'latlongN.txt')


