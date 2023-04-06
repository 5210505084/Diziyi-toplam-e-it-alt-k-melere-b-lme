# Diziyi-toplam-e-it-alt-k-melere-b-lme
İlk olarak, subsetSum adında bir fonksiyon oluşturulur ve tamsayı bir dizi parametre olarak alınır. Dizi elemanlarının toplamı, reduce() yöntemi kullanılarak hesaplanır ve sum değişkenine atanır. Toplamın 2'ye bölümünden kalanın 0 olup olmadığı kontrol edilir ve kalan 0 değilse, dizi iki alt kümede eşit şekilde bölünemez. Bu nedenle, kontrol edilir ve 0 değilse false değeri döndürülür.

Hedef toplam, her alt kümenin toplamı olan dizinin toplamının yarısına eşittir. Alt kümeleri hesaplamak için memo adında bir nesne kullanılır. Bu nesne, alt küme dizilerini değerler ve alt küme toplamlarını anahtarlar olarak depolar.

İlk alt küme boş bir dizi ile başlatılır ve memo nesnesine eklenir. Dizi, her bir eleman için döngüden geçirilir ve alt kümeler hesaplamak için iç içe bir döngü kullanılır. Alt küme toplamı hedef toplamı aşmadığında, eleman alt küme listesine eklenir. Bunu yapmak için, elemanın değeri alt küme toplamından çıkarılarak memo nesnesinde bir anahtar oluşturulur. Eğer anahtar memo nesnesinde mevcutsa, eleman her anahtarla ilgili alt kümelerin sonuna eklenir.

Döngü tamamlandığında, memo nesnesi, hedef toplamın ulaşılabilir olup olmadığını kontrol eder. Eğer hedef toplama ulaşılabilirse, memo nesnesindeki alt kümeler döndürülür ve bu, dizinin iki eşit parçaya bölünebileceğini gösterir. Aksi takdirde, false değeri döndürülür.

Bu kod, dinamik programlama kullanarak verilen bir dizinin çözümünü O(n x hedef) karmaşıklığıyla sağlar, burada n dizi uzunluğunu ve hedef, dizinin toplamının yarısıdır.
