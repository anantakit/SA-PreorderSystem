package com.sut.sa.g21.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@ToString
@EqualsAndHashCode
public class StorageFile {
    @SequenceGenerator(name="file_seq",sequenceName="file_seq")
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="file_seq")
    @Id @Column(name = "file_id") private Long id;
    private @NonNull String fileName;
    private @NonNull String fileType;
    @Lob
    private @NonNull byte[] data;

    public StorageFile(String originalFilename, String contentType, byte[] bytes) {
        this.fileName = originalFilename;
        this.fileType = contentType;
        this.data = bytes;
    }

    public String getFileName() {
        return fileName;
    }
}
